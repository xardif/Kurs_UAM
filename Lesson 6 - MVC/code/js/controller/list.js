(function (global) {
    var LC = function (view, store) {
        UAM.EventEmitter.call(this);
        this.view = view;
        this.store = store;
        this.store.on('itemAdded', this.addItemToView, this);
        this.store.on('stateChanged', this.stateChanged, this);
        this.view.on('changeStateOfItem', this.changeStateOfItem, this);
        this.view.on('saveData', this.saveData, this);

        this.loadData();
    };

    LC.prototype.addItemToView = function (item) {
        this.view.addItemToView(item);
    }

    LC.prototype.changeStateOfItem = function (item) {
        this.store.changeStateOfItem(item);
    }

    LC.prototype.stateChanged = function (item) {
        this.view.stateChanged(item);
    }

    LC.prototype.saveData = function () {
        var localData = JSON.stringify(this.store.data);
        window.localStorage.setItem('appData', localData);
    }

    LC.prototype.loadData = function () {
        var localData = JSON.parse(window.localStorage.getItem('appData'));
        this.store.loadData(localData);
    }

    global.UAM.ListCtrl = LC;
}(window));