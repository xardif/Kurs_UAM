(function (global) {
    var FV = function (view) {
        this.view = view;
        this.actives = 0;
        this.total = 0;
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
        var activesNumber, totalNumber;
        activesNumber = this.view.querySelector('#active');
        activesNumber.innerHTML = this.actives;
        totalNumber = this.view.querySelector('#total');
        totalNumber.innerHTML = this.total;
    }

    global.UAM.FooterView = FV;
}(window));