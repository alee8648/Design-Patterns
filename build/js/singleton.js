var singleton = (function() {

	// The variable to be returned, which will store the only instance of the class
	var instance;

	// The class's methods and data. 
	// The function accepts options which can be used in the initialisation of the Singleton
	function init(options) {
		var userName = options.name;
		var userLocation = options.location;

		var privateMethod = function() {
			console.log("A private method from singleton");
		};

		var publicMethod = function() {
			console.log("A public method from singleton");
			$('body').append('<p>You are ' + userName + ' from ' + userLocation+'</p>');
		};

		return {
			publicMethod: publicMethod
		};
	}

	// When singleton.getInstance is called, it checks if there is an existing instance of the class and if not, creates it. Thus, only one instance can be ever created

	// This is useful because it allows us to create a Singleton at whatever point we choose in the code, rather than defining it immediately on initialisation, which may allows us to pass necessary data to it.

	return {
		// Singletons provide global access through the getInstance() method
		getInstance: function(options) {
			if (!instance) {
				instance = init(options);
			}

			return instance;
		}
	};
}());

$('#options-submit').on('click', function() {
	var options = {
		name: $('#form-name').val(),
		location: $('#form-location').val()
	};
	$('#options-form input').attr('disabled','');
	singleton.getInstance(options).publicMethod();
})
