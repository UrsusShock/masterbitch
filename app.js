var navLeft = {
	handlers: {
		navLeft: "#navLeft",
		navLeftBtn: "#navLeftBtn"
	},
	options: {
		toggle: false
	},
	show: function() {
		$(this.handlers.navLeft).stop().animate({"left": "0px"});
		$(this.handlers.navLeftBtn).stop().animate({"left": "210px"});
	},
	hide: function() {
		$(this.handlers.navLeft).stop().animate({"left": "-200px"});
		$(this.handlers.navLeftBtn).stop().animate({"left": "10px"});
	},
	onClick: function() {
		var that = this;
		$(this.handlers.navLeftBtn).on("click", function() {
			that.options.toggle = (that.options.toggle) ? false : true;
			if (that.options.toggle) {
				that.show();
			} else {
				that.hide();
			}
		});
	},
	init: function() {
		this.onClick();
	}
}
$(document).ready(function() {
	navLeft.init();
});