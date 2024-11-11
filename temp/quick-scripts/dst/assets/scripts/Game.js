
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