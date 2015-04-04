UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.addItem = function (content, status) {
	var item = {'id': this.data.length, 'name': content, 'active': status}
	this.data.push(item);
	this.emit('itemAdded', item);
};

UAM.Store.prototype.changeStateOfItem = function (item) {
	this.data.forEach(function (element) {
		if (element.id === item.id) {
			element.active = !element.active;
			this.emit('stateChanged', element);
		}
	}, this);
};

UAM.Store.prototype.loadData = function (data) {
	data.forEach(function (element) {
		this.data.push(element);
		this.emit('itemAdded', element);
		if (element.active){
			this.emit('stateChanged', element);
		}
	}, this);
};