(function (global) {
    var IV = function (view) {
        UAM.EventEmitter.call(this);
        this.view = view;
        this.inputField = this.view.querySelector('#input');

        var addButton = document.getElementById('addButton');
        addButton.addEventListener('click', this.addItem.bind(this));       
    };

    UAM.utils.inherits(UAM.EventEmitter, IV);

    IV.prototype.addItem = function () {
        this.emit('storeItem', this.inputField .value);
        this.inputField .value = '';
    };

    global.UAM.InputView = IV;
}(window));