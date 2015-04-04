(function (global) {
    var FC = function (view, store) {
        UAM.EventEmitter.call(this);
        this.view = view;
        this.store = store;
        this.store.on('itemAdded', this.increaseNumberOfItems, this);
        this.store.on('stateChanged', this.updateActive, this);
    };

    FC.prototype.increaseNumberOfItems = function () {
        this.view.increaseNumberOfItems();
    }

    FC.prototype.updateActive = function (element) {
        this.view.updateActive(element.active);
    }

    global.UAM.FooterCtrl = FC;
}(window));