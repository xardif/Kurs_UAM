(function (global) {
    var IC = function (view, store) {
        UAM.EventEmitter.call(this);
        this.view = view;
        this.store = store;
        this.view.on('storeItem', this.storeItem, this);
    };

    IC.prototype.storeItem = function (item) {
        if (item != '') {
            this.store.addItem(item);
        }
    }

    global.UAM.InputCtrl = IC;
}(window));