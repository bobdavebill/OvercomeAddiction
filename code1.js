gdjs.CutsceneCode = {};
gdjs.CutsceneCode.localVariables = [];
gdjs.CutsceneCode.idToCallbackMap = new Map();
gdjs.CutsceneCode.GDCutsceneObjects1= [];
gdjs.CutsceneCode.GDCutsceneObjects2= [];
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1= [];
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects2= [];


gdjs.CutsceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cutscene"), gdjs.CutsceneCode.GDCutsceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnSkipCutscene"), gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1);
{for(var i = 0, len = gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CutsceneCode.GDCutsceneObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDCutsceneObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cutscene"), gdjs.CutsceneCode.GDCutsceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CutsceneCode.GDCutsceneObjects1.length;i<l;++i) {
    if ( gdjs.CutsceneCode.GDCutsceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.CutsceneCode.GDCutsceneObjects1[k] = gdjs.CutsceneCode.GDCutsceneObjects1[i];
        ++k;
    }
}
gdjs.CutsceneCode.GDCutsceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btnSkipCutscene"), gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1);
{for(var i = 0, len = gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnSkipCutscene"), gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length;i<l;++i) {
    if ( gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1[k] = gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1[i];
        ++k;
    }
}
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};

gdjs.CutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutsceneCode.GDCutsceneObjects1.length = 0;
gdjs.CutsceneCode.GDCutsceneObjects2.length = 0;
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length = 0;
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects2.length = 0;

gdjs.CutsceneCode.eventsList0(runtimeScene);
gdjs.CutsceneCode.GDCutsceneObjects1.length = 0;
gdjs.CutsceneCode.GDCutsceneObjects2.length = 0;
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects1.length = 0;
gdjs.CutsceneCode.GDbtnSkipCutsceneObjects2.length = 0;


return;

}

gdjs['CutsceneCode'] = gdjs.CutsceneCode;
