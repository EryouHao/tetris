(function (window) {
  'use strict';

  function Toast() {
    this.div = null;
    this._init();
  }

  Toast.prototype = {
    constructor: Toast,
    _init: function () {
      this._render();
    },
    _render() {
      this.div = document.createElement('div');
      this.div.classList = 'toast';
      this.div.innerText = 'hello';
    },
    _setMessage: function (message) {
      this.div.innerHTML = this.message;
    },
    show(msg) {
      this.div.innerText = msg;
      var button = '<button class="btn">确定</button>';
      document.body.appendChild(this.div);
    }
  };

  window.Toast = Toast;
})(window);