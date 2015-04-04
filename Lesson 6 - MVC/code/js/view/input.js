(function (global) {
    var IV = function (view) {
        UAM.EventEmitter.call(this);
        this.view = view;
        var addButton = document.getElementById('addButton');
        addButton.addEventListener('click', this.addItem.bind(this));
    };

    UAM.utils.inherits(UAM.EventEmitter, IV);

    IV.prototype.addItem = function () {
        var inputField = this.view.querySelector('#input');
        this.emit('storeItem', inputField.value);
        inputField.value = '';
    };

    global.UAM.InputView = IV;
}(window));