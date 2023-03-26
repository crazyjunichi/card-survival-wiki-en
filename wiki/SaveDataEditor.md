# 卡牌人生总结

回看你的人生

** PC 存档位置: **
`%UserProfile%/AppData/LocalLow/WinterSpring Games/Card Survival - Tropical Island/Games`
** Mac 存档位置：**
`/Users/xxxxx/Library/Application Support/com.winterspring.cardsurvival/`
** 安卓存档位置：**
`/Android/Data/com.winterspringgames.survivaljourney/files/`

** 文件名：**
1.03 版：`SaveData.json`
1.04 版：`Games/Slot_N.json`

<div class="mb-3">
  <label for="formFile" class="form-label">选择存档文件</label>
  <input class="form-control" type="file" id="formFile" onchange="onOpenFiles(this.files)">
</div>
<div id="sava_slot_container"></div>
<div id="sava_data_container"></div>
<div id="cloud_container" style="width:100%;height:500px"></div>
<script src="guid.js"></script>
<script src="b2wordcloud.min.js"></script>
<script>document.title="人生总结"</script>
