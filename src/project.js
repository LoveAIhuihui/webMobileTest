window.__require=function e(t,n,i){function c(o,s){if(!n[o]){if(!t[o]){var r=o.split("/");if(r=r[r.length-1],!t[r]){var l="function"==typeof __require&&__require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+o+"'")}o=r}var h=n[o]={exports:{}};t[o][0].call(h.exports,function(e){return c(t[o][1][e]||e)},h,h.exports,e,t,n,i)}return n[o].exports}for(var a="function"==typeof __require&&__require,o=0;o<i.length;o++)c(i[o]);return c}({Grivity:[function(e,t,n){"use strict";cc._RF.push(t,"7ef77xhZZhL3p9nMI8ekZU+","Grivity"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},pitch:{default:null,type:cc.Label},mainTex:{default:null,type:cc.Sprite},Slider:{default:null,type:cc.Slider},rollSpeed:5,lastSpeed:0,MaxAngle:30,AcX:0,lastAcx:0,floatAngle:5,floatSpeed:5,damp:.1},onLoad:function(){cc.systemEvent.setAccelerometerEnabled(!0),cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION,this.onDeviceMotionEvent,this),this.AngleBounce=-1*this.AcXInfluence/this.MaxAngle},start:function(){},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION,this.onDeviceMotionEvent,this)},onDeviceMotionEvent:function(e){cc.log("new event name test:",e.type," acc x:",e.acc.x," acc y:",e.acc.y," acc z:",e.acc.z),this.label.string="event name rotation19.45:"+e.type+" \nacc x:"+e.acc.x+"\nacc y:"+e.acc.y+"\nacc z:"+e.acc.z;var t=e.acc.x;e.acc.y,e.acc.z;this.AcX=t},update:function(e){var t=Math.abs(this.AcX*this.MaxAngle);if(this.mainTex.node.angle<t&&this.mainTex.node.angle>-1*t)if(this.AcX>.1)this.mainTex.node.angle+=this.rollSpeed*e*Math.abs(this.AcX);else if(this.AcX<-.1)this.mainTex.node.angle-=this.rollSpeed*e*Math.abs(this.AcX);else{var n=-1*this.mainTex.node.angle/10;this.mainTex.node.angle+=n*this.rollSpeed*e}else if(this.mainTex.node.angle>0){n=this.mainTex.node.angle-t;this.mainTex.node.angle-=e*n}else{n=this.mainTex.node.angle+t;this.mainTex.node.angle-=e*n}this.pitch.string="rotation "+this.mainTex.node.angle.toFixed(2)}}),cc._RF.pop()},{}],HelloWorld:[function(e,t,n){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}],Water_spread:[function(e,t,n){"use strict";cc._RF.push(t,"d485aKJH4VK9ZttqIWBQAMc","Water_spread"),Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bg=null,t.material=null,t.waveOffset=0,t}return __extends(t,e),t.prototype.onLoad=function(){this.material=this.bg.getComponent(cc.Sprite).getMaterial(0),this.bg.on(cc.Node.EventType.TOUCH_END,this.touchStartEvent,this)},t.prototype.touchStartEvent=function(e){var t=e.getLocation();this.material.setProperty("center",[t.x/this.bg.width,(this.bg.height-t.y)/this.bg.height]),this.waveOffset=0},t.prototype.update=function(e){this.waveOffset>2||(this.waveOffset+=e,this.material.setProperty("wave_offset",this.waveOffset))},__decorate([a(cc.Node)],t.prototype,"bg",void 0),t=__decorate([c],t)}(cc.Component);n.default=o,cc._RF.pop()},{}]},{},["Grivity","HelloWorld","Water_spread"]);