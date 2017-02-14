(function (window) {
  'use strict';

  function NextShape() {
    this.canvas = new Canvas('nextshape', 100, 70);

    this._init();
  }

  NextShape.prototype = {
    constructor: Score,
    _init: function () {
      this.rows = 4;
      this.cols = 6;
    },
    render: function (shape) {
      this.canvas.clear();
      shape.draw(this.canvas.context, 16);
    }
  };

  window.NextShape = NextShape;
})(window);