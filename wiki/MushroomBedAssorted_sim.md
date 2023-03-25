<div style="font-size:2em">[<div style="width:25px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/MushroomBedMagic.png" href="a.md" style="max-width:25px;max-height:25px;"></div>[Assorted Mushrooms Bed](MushroomBedAssorted.md)](MushroomBedAssorted.md) 数值模拟</div>  
<div class="row"><div class="col-md-6"><h3>初始属性：</h3><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Fertilizer<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Spoilage" for="input_Spoilage" class="form-label">0</label></div><input id="input_Spoilage" type="range" class="form-range" style="width:100%" min="0" max="384" value="0" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Usage：</label><label id="value_Usage" for="input_Usage" class="form-label">0</label></div><input id="input_Usage" type="range" class="form-range" style="width:100%" min="0" max="384" value="0" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Water<div style="width:20px;display:inline-block;text-align:center"><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"></div>：</label><label id="value_Fuel" for="input_Fuel" class="form-label">192</label></div><input id="input_Fuel" type="range" class="form-range" style="width:100%" min="0" max="288" value="192" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Progress：</label><label id="value_Progress" for="input_Progress" class="form-label">0</label></div><input id="input_Progress" type="range" class="form-range" style="width:100%" min="0" max="672" value="0" step="1" onchange="updatePropSimulator()" ><br></div><div class="col-md-6"><h3>其他条件：</h3><div class="form-check" style="margin-top:10px;"><input class="form-check-input" type="checkbox"  onchange="updatePropSimulator()" value="" id="input_tag_EnvHumid"><label class="form-check-label" style="margin-left:10px" for="input_tag_EnvHumid">位于：[Damp Chamber(Environment)](Env_DampChamber.md) | [Flooded Chamber(Environment)](Env_FloodedChamber.md) | [Dark Cave(Environment)](Env_CaveDark.md) | [Tidal Cave(Environment)](Env_CaveTidal.md) | [Jungle(Environment)](Env_DeepJungle.md) | [Jungle(Environment)](Env_Jungle.md) | [Jungle Highlands(Environment)](Env_JungleHighlands.md) | [Mangrove Forest(Environment)](Env_Mangroves.md) | [Wetlands(Environment)](Env_Wetlands.md)</label></div><div class="form-check" style="margin-top:10px;"><input class="form-check-input" type="checkbox"  onchange="updatePropSimulator()" value="" id="input_tag_EnvDry"><label class="form-check-label" style="margin-left:10px" for="input_tag_EnvDry">位于：[Volcano(Environment)](Env_AcidLake.md) | [Atoll(Environment)](Env_Atoll.md) | [Bay(Environment)](Env_Bay.md) | [Beach(Environment)](Env_Beach.md) | [Bird Rock(Environment)](Env_BirdRock.md) | [Secret Cove(Environment)](Env_Cove.md) | [Desolate Beach(Environment)](Env_DesolateBeach.md) | [Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Eastern Highlands(Environment)](Env_HighlandsEastern.md) | [Western Highlands(Environment)](Env_HighlandsWestern.md) | [Outskirts(Environment)](Env_Outskirts.md) | [Raft(Environment)](Env_Raft.md) | [Rocks(Environment)](Env_Rocks.md) | [Volcano(Environment)](Env_Volcano.md)</label></div><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Light：</label><label id="value_Light" for="input_Light" class="form-label">0</label></div><input id="input_Light" type="range" class="form-range" style="width:100%" min="0" max="100" value="0" step="1" onchange="updatePropSimulator()" ><br><div style="display:block;margin-top:10px;"><label for="customRange3" class="form-label">Rain Value：</label><label id="value_RainValue" for="input_RainValue" class="form-label">0</label></div><input id="input_RainValue" type="range" class="form-range" style="width:100%" min="0" max="5" value="0" step="1" onchange="updatePropSimulator()" ><br></div></div><hr><div class="row"><div class="col-md-6"><h3>人工干预：</h3><div style="margin-bottom:15px;"><div class="col" style="float:left;margin-right:8px;"><button type="button" class="btn btn-info" onclick="addInjectIndex(0)">添加</button></div><div class="col">时间点：<select id="ps_inject_0" class="form-select"><option selected value="0">最开始</option></select><div><b>Water</b> - Coconut Water | “Water for Crops”</div></div></div><div style="margin-bottom:15px;"><div class="col" style="float:left;margin-right:8px;"><button type="button" class="btn btn-info" onclick="addInjectIndex(1)">添加</button></div><div class="col">时间点：<select id="ps_inject_1" class="form-select"><option selected value="0">最开始</option></select><div><b>Fertilize</b> - “Fertilizer”</div></div></div><div style="margin-bottom:15px;"><div class="col" style="float:left;margin-right:8px;"><button type="button" class="btn btn-info" onclick="addInjectIndex(2)">添加</button></div><div class="col">时间点：<select id="ps_inject_2" class="form-select"><option selected value="0">最开始</option></select><div><b>Fertilize</b> - “Weak Fertilizer”</div></div></div></div><div class="col-md-6"><div id="injectContainer"></div></div></div><div class="col" style="margin-top:40px;"><div><div><select id="ps_timespan" onchange="updatePropSimulator()" style="float:left;" class="form-select">
        <option value="8h">显示8小时</option>
        <option value="1d">显示1天</option>
        <option selected value="10d">显示10天</option>
        <option value="30d">显示30天</option>
        <option value="60d">显示60天</option>
        </select><div></div><canvas id="myChart"></canvas></div>  
<script>var propSimulatorData={"args":[{"key":"Spoilage","name":"Fertilizer<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/FineDirt.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":384,"defaultValue":0,"active":true,"change":-1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"Usage","name":"Usage","min":0,"max":384,"defaultValue":0,"active":true,"change":-1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"Fuel","name":"Water<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/Thirst.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","min":0,"max":288,"defaultValue":192,"active":true,"change":-1,"endOnMin":false,"endOnMax":false,"show":true},{"key":"Progress","name":"Progress","min":0,"max":672,"defaultValue":0,"active":true,"change":1,"endOnMin":false,"endOnMax":true,"show":true},{"key":"tag_EnvHumid","name":"位于：[Damp Chamber(Environment)](Env_DampChamber.md) | [Flooded Chamber(Environment)](Env_FloodedChamber.md) | [Dark Cave(Environment)](Env_CaveDark.md) | [Tidal Cave(Environment)](Env_CaveTidal.md) | [Jungle(Environment)](Env_DeepJungle.md) | [Jungle(Environment)](Env_Jungle.md) | [Jungle Highlands(Environment)](Env_JungleHighlands.md) | [Mangrove Forest(Environment)](Env_Mangroves.md) | [Wetlands(Environment)](Env_Wetlands.md)","min":0,"max":1,"defaultValue":0},{"key":"tag_EnvDry","name":"位于：[Volcano(Environment)](Env_AcidLake.md) | [Atoll(Environment)](Env_Atoll.md) | [Bay(Environment)](Env_Bay.md) | [Beach(Environment)](Env_Beach.md) | [Bird Rock(Environment)](Env_BirdRock.md) | [Secret Cove(Environment)](Env_Cove.md) | [Desolate Beach(Environment)](Env_DesolateBeach.md) | [Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Eastern Highlands(Environment)](Env_HighlandsEastern.md) | [Western Highlands(Environment)](Env_HighlandsWestern.md) | [Outskirts(Environment)](Env_Outskirts.md) | [Raft(Environment)](Env_Raft.md) | [Rocks(Environment)](Env_Rocks.md) | [Volcano(Environment)](Env_Volcano.md)","min":0,"max":1,"defaultValue":0},{"key":"Light","name":"Light","min":0,"max":100,"defaultValue":0},{"key":"RainValue","name":"Rain Value","min":0,"max":5,"defaultValue":0}],"controls":[{"cond":[],"change":[{"key":"Spoilage","value":-1}]},{"cond":[],"change":[{"key":"Usage","value":-1}]},{"cond":[],"change":[{"key":"Fuel","value":-1}]},{"cond":[],"change":[{"key":"Progress","value":1}]},{"cond":[{"key":"Spoilage","title":"Fertilizer<div style=\"width:20px;display:inline-block;text-align:center\"><img decoding=\"async\" src=\"Sprite/FineDirt.png\" href=\"a.md\" style=\"max-width:20px;max-height:20px;\"></div>","range":[1,384]}],"change":[{"key":"Progress","value":0.5}]},{"cond":[{"key":"tag_EnvHumid","title":"位于：[Damp Chamber(Environment)](Env_DampChamber.md) | [Flooded Chamber(Environment)](Env_FloodedChamber.md) | [Dark Cave(Environment)](Env_CaveDark.md) | [Tidal Cave(Environment)](Env_CaveTidal.md) | [Jungle(Environment)](Env_DeepJungle.md) | [Jungle(Environment)](Env_Jungle.md) | [Jungle Highlands(Environment)](Env_JungleHighlands.md) | [Mangrove Forest(Environment)](Env_Mangroves.md) | [Wetlands(Environment)](Env_Wetlands.md)","range":[1,1],"isStack":false}],"change":[{"key":"Progress","value":0.25}]},{"cond":[{"key":"tag_EnvDry","title":"位于：[Volcano(Environment)](Env_AcidLake.md) | [Atoll(Environment)](Env_Atoll.md) | [Bay(Environment)](Env_Bay.md) | [Beach(Environment)](Env_Beach.md) | [Bird Rock(Environment)](Env_BirdRock.md) | [Secret Cove(Environment)](Env_Cove.md) | [Desolate Beach(Environment)](Env_DesolateBeach.md) | [Eastern Grasslands(Environment)](Env_GrasslandsE.md) | [Western Grasslands(Environment)](Env_GrasslandsW.md) | [Eastern Highlands(Environment)](Env_HighlandsEastern.md) | [Western Highlands(Environment)](Env_HighlandsWestern.md) | [Outskirts(Environment)](Env_Outskirts.md) | [Raft(Environment)](Env_Raft.md) | [Rocks(Environment)](Env_Rocks.md) | [Volcano(Environment)](Env_Volcano.md)","range":[1,1],"isStack":false}],"change":[{"key":"Progress","value":-0.5}]},{"cond":[{"key":"Light","title":"Light","range":[0,0]}],"change":[{"key":"Progress","value":0.25}]},{"cond":[{"key":"RainValue","title":"Rain Value","range":[1,5]}],"change":[{"key":"Fuel","value":25}]}],"actions":[{"name":"<b>Water</b> - Coconut Water | “Water for Crops”","change":[{"key":"Fuel","value":96}]},{"name":"<b>Fertilize</b> - “Fertilizer”","change":[{"key":"Spoilage","value":384}]},{"name":"<b>Fertilize</b> - “Weak Fertilizer”","change":[{"key":"Spoilage","value":96}]}]};updatePropSimulator();</script>  


<script>document.title="Assorted Mushrooms Bed 数值模拟 - Card Survival Wiki";</script>