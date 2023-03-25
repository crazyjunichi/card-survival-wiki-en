<div style="font-size:2em">[<div style="width:25px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/SkepBees.png" href="a.md" style="max-width:25px;max-height:25px;"></div>[Bee Skep](BeeSkep.md)](BeeSkep.md) 数值模拟</div>  
<div class="row"><div class="col-md-6"><h3>初始属性：</h3><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Torpor<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/Sleepy.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Spoilage" for="input_Spoilage" class="form-label">0</label></div><input id="input_Spoilage" type="range" class="form-range" style="width:100%" min="0" max="6" value="0" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Population<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Usage" for="input_Usage" class="form-label">336</label></div><input id="input_Usage" type="range" class="form-range" style="width:100%" min="0" max="1344" value="336" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Food Reserves<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Fuel" for="input_Fuel" class="form-label">0</label></div><input id="input_Fuel" type="range" class="form-range" style="width:100%" min="0" max="288" value="0" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Honey<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Progress" for="input_Progress" class="form-label">0</label></div><input id="input_Progress" type="range" class="form-range" style="width:100%" min="0" max="1000" value="0" step="1" onchange="updatePropSimulator()" ><br></div><div class="col-md-6"><h3>其他条件：</h3><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">[China Rose](ChinaRosePlant.md) | [Jasmine Flowers](JasminePlant.md) 总数量：</label><label id="value_tag_Flower" for="input_tag_Flower" class="form-label">0</label></div><input id="input_tag_Flower" type="range" class="form-range" style="width:100%" min="0" max="50" value="0" step="1" onchange="updatePropSimulator()" ><br><div class="form-check" style="margin-top:10px;"><input class="form-check-input" type="checkbox"  onchange="updatePropSimulator()" value="" id="input_tag_EnvFertile"><label class="form-check-label" style="margin-left:10px" for="input_tag_EnvFertile">存在：[Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Secret Valley(Environment)](Env_SecretValley.md)</label></div><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">[Bee Skep](BeeSkep.md) 总数量：</label><label id="value_BeeSkep" for="input_BeeSkep" class="form-label">0</label></div><input id="input_BeeSkep" type="range" class="form-range" style="width:100%" min="1" max="50" value="0" step="1" onchange="updatePropSimulator()" ><br></div></div><hr><div class="row"><div class="col-md-6"><h3>人工干预：</h3><div style="margin-bottom:15px;"><div class="col" style="float:left;margin-right:8px;"><button type="button" class="btn btn-info" onclick="addInjectIndex(0)">添加</button></div><div class="col">时间点：<select id="ps_inject_0" class="form-select"><option selected value="0">最开始</option></select><div><b>Smoke</b> - Torch | Bee Smoker</div></div></div><div style="margin-bottom:15px;"><div class="col" style="float:left;margin-right:8px;"><button type="button" class="btn btn-info" onclick="addInjectIndex(1)">添加</button></div><div class="col">时间点：<select id="ps_inject_1" class="form-select"><option selected value="0">最开始</option></select><div><b>Feed</b> - “Water Container” ([“Sweet Water(Group)”](GpTag_SweetWater.md) x 1)</div></div></div></div><div class="col-md-6"><div id="injectContainer"></div></div></div><div class="col" style="margin-top:40px;"><div><div><select id="ps_timespan" onchange="updatePropSimulator()" style="float:left;" class="form-select">
        <option value="8h">显示8小时</option>
        <option value="1d">显示1天</option>
        <option selected value="10d">显示10天</option>
        <option value="30d">显示30天</option>
        <option value="60d">显示60天</option>
        </select><div></div><canvas id="myChart"></canvas></div>  
<script>var propSimulatorData={"args":[{"key":"Spoilage","name":"Torpor<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Sleepy.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":6,"defaultValue":0,"active":true,"change":-1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"Usage","name":"Population<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/BeeStings.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":1344,"defaultValue":336,"active":true,"change":1,"endOnMin":true,"endOnMax":false,"show":true},{"key":"Fuel","name":"Food Reserves<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Hunger.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":288,"defaultValue":0,"active":true,"change":-1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"Progress","name":"Honey<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/BeeHoneycomb.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":1000,"defaultValue":0,"active":true,"change":0.1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"tag_Flower","name":"[China Rose](ChinaRosePlant.md) | [Jasmine Flowers](JasminePlant.md) 总数量","min":0,"max":50,"defaultValue":0},{"key":"tag_EnvFertile","name":"存在：[Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Secret Valley(Environment)](Env_SecretValley.md)","min":0,"max":1,"defaultValue":0},{"key":"BeeSkep","name":"[Bee Skep](BeeSkep.md) 总数量","min":1,"max":50,"defaultValue":0}],"controls":[{"cond":[],"change":[{"key":"Spoilage","value":-1}]},{"cond":[],"change":[{"key":"Usage","value":1}]},{"cond":[],"change":[{"key":"Fuel","value":-1}]},{"cond":[],"change":[{"key":"Progress","value":0.1}]},{"cond":[{"key":"tag_Flower","title":"[China Rose](ChinaRosePlant.md) | [Jasmine Flowers](JasminePlant.md) 总数量","range":[1,50],"isStack":true}],"change":[{"key":"Progress","value":0.1}]},{"cond":[{"key":"tag_EnvFertile","title":"存在：[Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Secret Valley(Environment)](Env_SecretValley.md)","range":[1,1],"isStack":false}],"change":[{"key":"Progress","value":0.5}]},{"cond":[{"key":"Fuel","title":"Food Reserves<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Hunger.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[0,0.1]}],"change":[{"key":"Progress","value":-1}]},{"cond":[{"key":"Fuel","title":"Food Reserves<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Hunger.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[0,0.1]},{"key":"Progress","title":"Honey<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/BeeHoneycomb.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[0,0.1]}],"change":[{"key":"Usage","value":-2}]},{"cond":[{"key":"BeeSkep","title":"[Bee Skep](BeeSkep.md) 总数量","range":[1,50],"isStack":true}],"change":[{"key":"Progress","value":-0.5}]},{"cond":[{"key":"Fuel","title":"Food Reserves<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Hunger.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[0.5,1]},{"key":"Progress","title":"Honey<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/BeeHoneycomb.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[0.5,1]}],"change":[{"key":"Usage","value":1}]}],"actions":[{"name":"<b>Smoke</b> - Torch | Bee Smoker","change":[{"key":"Spoilage","value":6}]},{"name":"<b>Feed</b> - “Water Container” ([“Sweet Water(Group)”](GpTag_SweetWater.md) x 1)","change":[{"key":"Fuel","value":500}]}]};updatePropSimulator();</script>  


<script>document.title="Bee Skep 数值模拟 - Card Survival Wiki";</script>