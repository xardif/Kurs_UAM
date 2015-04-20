(function (global) {
    var LV = function (view) {
        UAM.EventEmitter.call(this);
        this.view = view;
        this.list = this.view.querySelector('#list');

        var saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click', this.saveData.bind(this));
    };

    UAM.utils.inherits(UAM.EventEmitter, LV);

    LV.prototype.saveData = function () {
        this.emit('saveData');
    }

    LV.prototype.addItemToView = function (item) {
        var li = document.createElement('li'),
            thisContext = this;
        li.innerHTML = item.name;
        li.setAttribute('id', 'id' + item.id);
        li.setAttribute('data-id', item.id);
        li.addEventListener('click', function () {
            thisContext.emit('changeStateOfItem', item);
        });
        this.list.appendChild(li);
    }

    LV.prototype.stateChanged = function (item) {
        var element = this.view.querySelector('#id'+ item.id);
        element.classList.toggle('active');
    }

    global.UAM.ListView = LV;
}(window));