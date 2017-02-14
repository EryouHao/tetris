(function (window) {
  'use strict';

  function Tetris() {
    this.board = new Board(this);
    this.score = new Score();
    this.timer = new Timer();
    this.level = new Level();
    this.nextshape = new NextShape();
    this.highscore = new HighScore();
    this._state = 'playing';
    this.toast = new Toast();
    (new Keyboard()).init(this.board);
  }
  Tetris.prototype = {
    constructor: Tetris,
    _startTick() {
      var self = this;
      window.TetrisConfig.intervalId = window.setInterval(function () {
        self.board.tick();
      }, TetrisConfig.speed);
    },
    _stopTick: function () {
      window.clearInterval(window.TetrisConfig.intervalId);      
    },
    startGame: function () {
      this._startTick();
    },
    endGame: function () {
      this._stopTick();
      this.timer.stop();
      this.toast.show('Game Over!');     
    },
    pause: function () {
      if (this._state === 'over') {
        return;
      }
      this._state = 'pause';
      this._stopTick();
      this.timer.pause();
    },
    resume: function () {
      if (this._state === 'over') {
        return;
      }
      this._state = 'playing';
      this._startTick();
      this.timer.resume();
    }
  }

  window.Tetris = Tetris;

})(window);