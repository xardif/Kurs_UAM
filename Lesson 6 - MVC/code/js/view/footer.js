(function (global) {
    var FV = function (view) {
        this.view = view;
        this.actives = 0;
        this.total = 0;
        this.activesNumberElement  = view.querySelector('#active');
        this.totalNumberElement = view.querySelector('#total');
        this.refresh();
    };

    FV.prototype.increaseNumberOfItems = function () {
        this.total++;
        this.refresh();
    }

    FV.prototype.updateActive = function (value) {
        if (value) {
            this.actives++;
        } else {
            this.actives--;
        }
        this.refresh();
    }

    FV.prototype.refresh = function () {
        this.activesNumberElement.innerHTML = this.actives;
        this.totalNumberElement.innerHTML = this.total;
    }

    global.UAM.FooterView = FV;
}(window));