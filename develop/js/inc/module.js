// An example of the module design pattern, by enclosing all the application's major logic inside a module this reduces the amount of variables on the global scope which helps to avoid collision with other functions and objects with equivalent names. 

// By enclosing the code inside a closure, we are able to choose which methods should be publicly accessible and which are private and are only used internally. 

// Setting the module to a globally scoped variable allows access to it throughout the application. 
// Passing globally scoped variables to the function expression as parameters is faster and clearer than relying on JavaScript's implied globals feature.
var Module = (function ($, window) {

	function Module() {

		// Public methods are created as properties of the parent object using the 'this' keyword and dot notation.
		this.init = function() {
			console.log('SampleModule initialised');
		}; 

		// Private methods are declared in function declarations using the 'var' keyword and may only be used within this scope.
		function privateMethod() {
			console.log('A private method');
		}

		privateMethod();
	}
	
	// Return the function created within the closure to be saved to the global variable 'SampleModule'
	return Module;

}(jQuery, window))

// The module is now available to be used as a constructor function to create an instance of the module and save it to a variable.
var module = new Module();

// Methods of the module can now be called
module.init();

