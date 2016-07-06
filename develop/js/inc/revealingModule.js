// The Revealing Module is very similar to the Module pattern except it specifies exactly what methods to return, rather than deciding if they will be public or private when they are declared.
var RevealingModule = (function ($, window) {

	this.init = function() {
		console.log('RevealingModule initialised');
	}; 

	function publicMethod() {
		return "publicMethod returned";
	}

	function privateMethod() {
		console.log('A private method');
	}

	
	function publicMethod2() {
		console.log(publicMethod());
	}

	// In place of returning the whole module as in the Module pattern, the Revealing Module pattern returns an object containing all the methods you explicitly want to make public, giving a greater degree of control and a clearer way of cherry picking the methods to be public.
	// Returning a private method for public use is often called 'revealing' a method
	return {
		init: init,
		publicMethod: publicMethod,
		publicMethod2: publicMethod2
	};

// When declaring functions directly in the 'return' object, there is a scoping issue caused by public methods calling other public methods. The new scope they are called in does not have access to the other public method. This is resolved by calling the function with the 'RevealingModule.' prepended, or by returning the functions as I have done above.


}(jQuery, window));

RevealingModule.init();
RevealingModule.publicMethod2();