(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/components/Settings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4c04fyd89JAZY7qGjvubi+f', 'Settings', __filename);
// scripts/components/Settings.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _btnYXOpen: null,
        _btnYXClose: null,
        _btnYYOpen: null,
        _btnYYClose: null
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.vv == null) {
            return;
        }

        this._btnYXOpen = this.node.getChildByName("yinxiao").getChildByName("btn_yx_open");
        this._btnYXClose = this.node.getChildByName("yinxiao").getChildByName("btn_yx_close");

        this._btnYYOpen = this.node.getChildByName("yinyue").getChildByName("btn_yy_open");
        this._btnYYClose = this.node.getChildByName("yinyue").getChildByName("btn_yy_close");

        this.initButtonHandler(this.node.getChildByName("btn_close"));
        //this.initButtonHandler(this.node.getChildByName("btn_exit"));


        this.initButtonHandler(this._btnYXOpen);
        this.initButtonHandler(this._btnYXClose);
        this.initButtonHandler(this._btnYYOpen);
        this.initButtonHandler(this._btnYYClose);

        var slider = this.node.getChildByName("yinxiao").getChildByName("progress");
        cc.vv.utils.addSlideEvent(slider, this.node, "Settings", "onSlided");

        var slider = this.node.getChildByName("yinyue").getChildByName("progress");
        cc.vv.utils.addSlideEvent(slider, this.node, "Settings", "onSlided");

        this.refreshVolume();
    },

    onSlided: function onSlided(slider) {
        if (slider.node.parent.name == "yinxiao") {
            cc.vv.audioMgr.setSFXVolume(slider.progress);
        } else if (slider.node.parent.name == "yinyue") {
            cc.vv.audioMgr.setBGMVolume(slider.progress);
        }
        this.refreshVolume();
    },

    initButtonHandler: function initButtonHandler(btn) {
        cc.vv.utils.addClickEvent(btn, this.node, "Settings", "onBtnClicked");
    },

    refreshVolume: function refreshVolume() {

        this._btnYXClose.active = cc.vv.audioMgr.sfxVolume > 0;
        this._btnYXOpen.active = !this._btnYXClose.active;

        var yx = this.node.getChildByName("yinxiao");
        var width = 430 * cc.vv.audioMgr.sfxVolume;
        var progress = yx.getChildByName("progress");
        progress.getComponent(cc.Slider).progress = cc.vv.audioMgr.sfxVolume;
        progress.getChildByName("progress").width = width;
        //yx.getChildByName("btn_progress").x = progress.x + width;


        this._btnYYClose.active = cc.vv.audioMgr.bgmVolume > 0;
        this._btnYYOpen.active = !this._btnYYClose.active;
        var yy = this.node.getChildByName("yinyue");
        var width = 430 * cc.vv.audioMgr.bgmVolume;
        var progress = yy.getChildByName("progress");
        progress.getComponent(cc.Slider).progress = cc.vv.audioMgr.bgmVolume;

        progress.getChildByName("progress").width = width;
        //yy.getChildByName("btn_progress").x = progress.x + width;
    },

    onBtnClicked: function onBtnClicked(event) {
        if (event.target.name == "btn_close") {
            this.node.active = false;
        }
        // else if(event.target.name == "btn_exit"){
        //     cc.sys.localStorage.removeItem("wx_account");
        //     cc.sys.localStorage.removeItem("wx_sign");
        //     cc.director.loadScene("login");
        // }
        else if (event.target.name == "btn_yx_open") {
                cc.vv.audioMgr.setSFXVolume(1.0);
                this.refreshVolume();
            } else if (event.target.name == "btn_yx_close") {
                cc.vv.audioMgr.setSFXVolume(0);
                this.refreshVolume();
            } else if (event.target.name == "btn_yy_open") {
                cc.vv.audioMgr.setBGMVolume(1);
                this.refreshVolume();
            } else if (event.target.name == "btn_yy_close") {
                cc.vv.audioMgr.setBGMVolume(0);
                this.refreshVolume();
            }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Settings.js.map
        