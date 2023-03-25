function initPropSimulator() {}

var chart;

var simInfo = {
    injectList: [],
};

function updatePropSimulator() {
    if (typeof propSimulatorData == "undefined") {
        return;
    }

    let args = propSimulatorData.args;
    let controls = propSimulatorData.controls;
    let valueMap = {};
    args.forEach((arg) => {
        let labelElement = document.getElementById("value_" + arg.key);
        let inputElement = document.getElementById("input_" + arg.key);
        let value = parseInt(inputElement.value);
        if (inputElement.type == "checkbox") {
            value = inputElement.checked ? 1 : 0;
        }
        valueMap[arg.key] = {
            label: arg.name,
            labelElement: labelElement,
            inputElement: inputElement,
            values: [value],
            min: arg.min,
            max: arg.max,
            endOnMin: arg.endOnMin,
            endOnMax: arg.endOnMax,
        };
        if (labelElement) {
            if (arg.show) {
                labelElement.innerText = Math.round((value / arg.max) * 1000) / 10 + "%";
            } else {
                labelElement.innerText = value + "";
            }
        }
    });

    let tick = 4 * 24 * 5;
    let step = 4;
    let timeFunc = (v) => v + "TP";

    let timespan = document.getElementById("ps_timespan").value;
    if (timespan == "1d") {
        tick = 4 * 24;
        step = 4;
        timeFunc = (v) => v / 4 + "小时";
    } else if (timespan == "8h") {
        tick = 4 * 8;
        step = 1;
        timeFunc = (v) => v + "TP";
    } else if (timespan == "10d") {
        tick = 4 * 24 * 10;
        step = (4 * 24) / 2;
        timeFunc = (v) => v / 4 / 24 + "天";
    } else if (timespan == "30d") {
        tick = 4 * 24 * 30;
        step = 4 * 24;
        timeFunc = (v) => v / 4 / 24 + "天";
    } else if (timespan == "60d") {
        tick = 4 * 24 * 60;
        step = 4 * 24 * 2;
        timeFunc = (v) => v / 4 / 24 + "天";
    }
    let labels = ["0"];
    let stepValueMap = {};
    args.forEach((arg) => {
        stepValueMap[arg.key] = valueMap[arg.key].values[valueMap[arg.key].values.length - 1];
    });
    let endCycle = false;
    for (let t = 0; t < tick; t++) {
        let curValueMap = {};
        args.forEach((arg) => {
            curValueMap[arg.key] = stepValueMap[arg.key];
        });

        controls.forEach((ctl) => {
            let scale = 1;
            let success = ctl.cond.every((cdt) => {
                let v = stepValueMap[cdt.key];
                if (v == undefined) {
                    return true;
                }
                if (cdt.isStack) {
                    scale = v;
                }
                return Math.floor(v) >= cdt.range[0] && Math.floor(v) <= cdt.range[1];
            });
            if (success) {
                ctl.change.forEach((change) => {
                    let value = curValueMap[change.key] + change.value * scale;
                    value = Math.max(value, valueMap[change.key].min);
                    value = Math.min(value, valueMap[change.key].max);
                    curValueMap[change.key] = value;
                    if (value <= valueMap[change.key].min && valueMap[change.key].endOnMin) {
                        endCycle = true;
                    }
                    if (value >= valueMap[change.key].max && valueMap[change.key].endOnMax) {
                        endCycle = true;
                    }
                });
            }
        });

        args.forEach((arg) => {
            stepValueMap[arg.key] = curValueMap[arg.key];
        });

        simInfo.injectList.forEach((item) => {
            if (item.tick == t) {
                item.change.forEach((kv) => {
                    stepValueMap[kv.key] += kv.value;
                });
            }
        });

        let index = t + 1;
        if (index % step == 0) {
            let label = timeFunc(index);
            labels.push(label);
            args.forEach((arg) => {
                valueMap[arg.key].values.push(curValueMap[arg.key]);
            });
            if (endCycle) {
                break;
            }
        }
    }

    propSimulatorData.actions.forEach((a, i) => {
        let ele = document.getElementById("ps_inject_" + i);
        let oldValue = ele.value;
        ele.innerHTML = labels
            .slice(1)
            .map((l, j) => {
                let v = (j + 1) * step;
                return `<option ${v == oldValue ? "selected" : ""} value="${v}">${l}</option>`;
            })
            .join("");
    });

    let dataset = {
        labels: labels,
        datasets: args
            .filter((arg) => {
                return arg.show; // && arg.key == "Progress";
            })
            .map((arg) => {
                let data = valueMap[arg.key].values.map((x) => (x / arg.max) * 100);
                // let data = valueMap[arg.key].values;
                return {
                    label: arg.name.replace(/\<.+\>/g, ""),
                    data: data,
                    borderWidth: 1,
                };
            }),
    };

    if (chart) {
        chart.data = dataset;
        // chart.options.transitions.active.animation.duration = 0;
        chart.update();
    } else {
        const ctx = document.getElementById("myChart");
        chart = new Chart(ctx, {
            type: "line",
            data: dataset,
            options: {
                scales: {
                    y: {
                        // beginAtZero: true,
                        // max: 100,
                        ticks: {
                            callback: function (value, index, ticks) {
                                return value + "%";
                            },
                        },
                    },
                },
                animation: {
                    duration: 0,
                },
                onClick: (e) => {
                    const canvasPosition = Chart.helpers.getRelativePosition(e, chart);

                    // Substitute the appropriate scale IDs
                    const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                    const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
                    console.log(dataX, dataY);
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || "";

                                if (label) {
                                    label += ": ";
                                }
                                if (context.parsed.y !== null) {
                                    label += Math.round(context.parsed.y * 100) / 100 + "%";
                                }
                                return label;
                            },
                        },
                    },
                },
            },
        });
    }
}

function addInjectIndex(index) {
    let ele = document.getElementById("ps_inject_" + index);
    let v = ele.value;
    let label = ele.selectedOptions[0].text;
    let action = propSimulatorData.actions[index];
    console.log("add", v, action);

    let name = action.name.replace(/\]\(\w+\.md\)/g, "").replace(/\[/g, "");
    let msg = `<b>[${label}]</b> ${name}`;
    addInject(v, msg, action.change);
}

let injectID = 0;
function addInject(tick, msg, change) {
    injectID++;
    simInfo.injectList.push({
        tick: tick,
        change: change,
        injectID: injectID,
    });
    updatePropSimulator();
    addInjectItem(msg, injectID);
}

function removeInject(id) {
    let ele = document.getElementById("alert_" + id);
    if (ele) {
        ele.parentNode.parentNode.removeChild(ele.parentNode);
    }
    let index = simInfo.injectList.findIndex((x) => x.injectID == id);
    if (index >= 0) {
        simInfo.injectList.splice(index, 1);
        updatePropSimulator();
    }
}

const addInjectItem = (message, id) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" id="alert_${id}" role="alert_${id}">`,
        `<div>${message}</div>`,
        `<button type="button" style="float:right" class="btn-close" onclick="removeInject(${id})" data-bs-dismiss="alert_${id}" aria-label="Close"></button>`,
        "</div>",
    ].join("");

    document.getElementById("injectContainer").append(wrapper);
};
