(function (global) {
    var LV = function (view) {
        UAM.EventEmitter.call(this);
        this.view = view;
        var saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click', this.saveData.bind(this));
    };

    UAM.utils.inherits(UAM.EventEmitter, LV);

    LV.prototype.saveData = function () {
        this.emit('saveData');
    }

    LV.prototype.addItemToView = function (item) {
        var li = document.createElement('li'),
            thisContext = this,
            list = this.view.querySelector('#list');
        li.innerHTML = item.name;
        li.setAttribute('id', 'id' + item.id);
        li.setAttribute('data-id', item.id);
        li.addEventListener('click', function () {
            thisContext.emit('changeStateOfItem', item);
        });
        list.appendChild(li);
    }

    LV.prototype.stateChanged = function (item) {
        var element = this.view.querySelector('#id'+ item.id);
        element.classList.toggle('active');
    }

    global.UAM.ListView = LV;
}(window));