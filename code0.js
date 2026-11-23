gdjs.StartSceneCode = {};
gdjs.StartSceneCode.localVariables = [];
gdjs.StartSceneCode.idToCallbackMap = new Map();
gdjs.StartSceneCode.GDStartBgObjects1= [];
gdjs.StartSceneCode.GDStartBgObjects2= [];
gdjs.StartSceneCode.GDbtnStartObjects1= [];
gdjs.StartSceneCode.GDbtnStartObjects2= [];


gdjs.StartSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnStart"), gdjs.StartSceneCode.GDbtnStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartSceneCode.GDbtnStartObjects1.length;i<l;++i) {
    if ( gdjs.StartSceneCode.GDbtnStartObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartSceneCode.GDbtnStartObjects1[k] = gdjs.StartSceneCode.GDbtnStartObjects1[i];
        ++k;
    }
}
gdjs.StartSceneCode.GDbtnStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Tense Cinematic NoCopyright Background Music Compilation (1).mp3", true, 100, 1);
}
}

}


};

gdjs.StartSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartSceneCode.GDStartBgObjects1.length = 0;
gdjs.StartSceneCode.GDStartBgObjects2.length = 0;
gdjs.StartSceneCode.GDbtnStartObjects1.length = 0;
gdjs.StartSceneCode.GDbtnStartObjects2.length = 0;

gdjs.StartSceneCode.eventsList0(runtimeScene);
gdjs.StartSceneCode.GDStartBgObjects1.length = 0;
gdjs.StartSceneCode.GDStartBgObjects2.length = 0;
gdjs.StartSceneCode.GDbtnStartObjects1.length = 0;
gdjs.StartSceneCode.GDbtnStartObjects2.length = 0;


return;

}

gdjs['StartSceneCode'] = gdjs.StartSceneCode;
