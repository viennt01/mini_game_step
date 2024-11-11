
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e12fLSQu1L+KV6QmxDiavU', 'Game');
// scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 0,
    ground: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    this.groundY = this.ground.y + this.ground.height / 2;
    this.timer = 0;
    this.starDuration = 0;
    this.spawnNewStar();
    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    if (this.timer > this.starDuration) {
      this.gameOver();
      this.enabled = false; // disable gameOver logic to avoid load scene repeatedly
      return;
    }
    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score: ' + this.score;
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    cc.director.loadScene('game');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsImVuYWJsZWQiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFDYixDQUFDO0lBQ0RDLGVBQWUsRUFBRSxDQUFDO0lBQ2xCQyxlQUFlLEVBQUUsQ0FBQztJQUNsQkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQUFJO01BQ2JKLElBQUksRUFBRUwsRUFBRSxDQUFDVTtJQUNiLENBQUM7SUFDREMsTUFBTSxFQUFF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LENBQUNpRCxRQUFRLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDakM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBzY29yZUF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB9LFxuXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSxcblxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlOyAgIC8vIGRpc2FibGUgZ2FtZU92ZXIgbG9naWMgdG8gYXZvaWQgbG9hZCBzY2VuZSByZXBlYXRlZGx5XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICB9LFxuXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4644f0m2WtABYRy+pn6dOaG', 'Star');
// scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  },
  update: function update(dt) {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }
    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFO0VBQ2hCLENBQUM7RUFFREMsaUJBQWlCLEVBQUUsU0FBQUEsa0JBQUEsRUFBWTtJQUMzQixJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO0lBQzlDLElBQUlDLElBQUksR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNQLFNBQVMsQ0FBQyxDQUFDUSxHQUFHLEVBQUU7SUFDbEQsT0FBT0osSUFBSTtFQUNmLENBQUM7RUFFREssUUFBUSxFQUFFLFNBQUFBLFNBQUEsRUFBVztJQUNqQixJQUFJLENBQUNSLElBQUksQ0FBQ1MsWUFBWSxFQUFFO0lBQ3hCLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxTQUFTLEVBQUU7SUFDckIsSUFBSSxDQUFDTixJQUFJLENBQUNPLE9BQU8sRUFBRTtFQUN2QixDQUFDO0VBRURDLE1BQU0sRUFBRSxTQUFBQSxPQUFVQyxFQUFFLEVBQUU7SUFDbEIsSUFBSSxJQUFJLENBQUNmLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDRCxVQUFVLEVBQUU7TUFDNUMsSUFBSSxDQUFDVyxRQUFRLEVBQUU7TUFDZjtJQUNKO0lBRUEsSUFBSU0sWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNkLElBQUksQ0FBQ2UsS0FBSyxHQUFDLElBQUksQ0FBQ2YsSUFBSSxDQUFDZ0IsWUFBWTtJQUM3RCxJQUFJQyxVQUFVLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUNiLElBQUksQ0FBQ2MsT0FBTyxHQUFHRCxVQUFVLEdBQUdFLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixZQUFZLElBQUksR0FBRyxHQUFHRyxVQUFVLENBQUMsQ0FBQztFQUNsRjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXG4gICAgfSxcblxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4a63vlYDJIRZwmWcOGe3+A', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFO0VBQ1g7RUFDQTtFQUNBRCxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsMkJBQTJCLEdBQUcsSUFBSTtBQUNoRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIOS5i+WJjeeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmlmIChjYy5Ub2dnbGUpIHtcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2NoZWNrID0gdHJ1ZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c688v72QdOKamCGCT+xaAd', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  setJumpAction: function setJumpAction() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    var callback = cc.callFunc(this.playJumpSound, this);
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;
      case cc.macro.KEY.s:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;
      case cc.macro.KEY.s:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction);
    this.accLeft = false;
    this.accRight = false;
    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }
    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }
    this.node.x += this.xSpeed * dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInNldEp1bXBBY3Rpb24iLCJqdW1wVXAiLCJtb3ZlQnkiLCJ2MiIsImVhc2luZyIsImVhc2VDdWJpY0FjdGlvbk91dCIsImp1bXBEb3duIiwiZWFzZUN1YmljQWN0aW9uSW4iLCJjYWxsYmFjayIsImNhbGxGdW5jIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJzIiwiYWNjUmlnaHQiLCJvbktleVVwIiwib25Mb2FkIiwianVtcEFjdGlvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFLENBQUM7SUFDYkMsWUFBWSxFQUFFLENBQUM7SUFDZkMsWUFBWSxFQUFFLENBQUM7SUFDZkMsS0FBSyxFQUFFLENBQUM7SUFDUkMsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRVQsRUFBRSxDQUFDVTtJQUNiO0VBQ0osQ0FBQztFQUVEQyxhQUFhLEVBQUUsU0FB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LEVBQUUsQ0FBQ3lDLFdBQVcsQ0FBQ08sR0FBRyxDQUFDaEQsRUFBRSxDQUFDMkMsV0FBVyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sRUFBRSxJQUFJLENBQUNYLE9BQU8sRUFBRSxJQUFJLENBQUM7RUFDM0UsQ0FBQztFQUVEYyxNQUFNLEVBQUUsU0FBQUEsT0FBVUMsRUFBRSxFQUFFO0lBQ2xCLElBQUksSUFBSSxDQUFDbEIsT0FBTyxFQUFFO01BQ2QsSUFBSSxDQUFDUSxNQUFNLElBQUksSUFBSSxDQUFDakMsS0FBSyxHQUFHMkMsRUFBRTtJQUNsQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNoQixRQUFRLEVBQUU7TUFDdEIsSUFBSSxDQUFDTSxNQUFNLElBQUksSUFBSSxDQUFDakMsS0FBSyxHQUFHMkMsRUFBRTtJQUNsQztJQUNBLElBQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1osTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDbEMsWUFBWSxFQUFHO01BQzdDLElBQUksQ0FBQ2tDLE1BQU0sR0FBRyxJQUFJLENBQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDa0MsTUFBTSxHQUFHVyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNaLE1BQU0sQ0FBQztJQUN6RTtJQUVBLElBQUksQ0FBQ0YsSUFBSSxDQUFDZSxDQUFDLElBQUksSUFBSSxDQUFDYixNQUFNLEdBQUdVLEVBQUU7RUFDbkM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcbiAgICAgICAgYWNjZWw6IDAsXG4gICAgICAgIGp1bXBBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93biwgY2FsbGJhY2spKTtcbiAgICB9LFxuXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25LZXlVcCAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xuXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTsgICAgXG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfSwgICAgXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xuICAgIH0sXG59KTtcblxuXG4iXX0=
//------QC-SOURCE-SPLIT------
