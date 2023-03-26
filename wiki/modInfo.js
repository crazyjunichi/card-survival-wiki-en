let baseUrl = "https://crazyjunichi.github.io/card-survial-mod-list/";
function fetchModList() {
    return fetch(baseUrl + "ModList.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return json;
        });
}

function fetchModInfo(key) {
    return fetch(baseUrl + "mods/" + key + "/ModInfo.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return json;
        });
}

function fetchModVersion(key) {
    return fetch(baseUrl + "mods/" + key + "/VersionList.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.forEach((item) => {
                item.file = baseUrl + "mods/" + key + "/" + item.file;
            });
            console.log(json);
            return json;
        });
}

function updateVersionDownload(key) {
    let ele = document.getElementById("versionContainer");
    if (!ele) {
        return;
    }
    fetchModVersion(key).then((json) => {
        let html = "";
        json.forEach((item) => {
            html += `<a href="${item.file}" style="margin-right:10px;">下载${item.version}</a>`;
        });
        ele.innerHTML = html;
    });
}
