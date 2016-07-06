var singleton = (function() {


	var instance;

	function init() {
		var privateMethod = function() {
			console.log("A private method from singleton");
		};

		var publicMethod = function() {
			console.log("A public method from singleton");
		};

		return {
			publicMethod: publicMethod
		};
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}

			return instance;
		}
	};
}());

singleton.getInstance().publicMethod();