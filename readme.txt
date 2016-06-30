*****	GENERAL	*****
*********************

Project: 	Edelman Brighton Responsive HTML5 boilerplate
Author: 	Emil Pitts
Date: 		October 2015



*****	   VERSIONS 	*****
*****************************



*****	INCLUDED TECH	*****
*****************************
Dependancies
--------------------
npm   - https://www.npmjs.com/
gulp  - http://gulpjs.com/
bower - http://bower.io/

Included
--------------------
jQuery 1.11.3 	- https://jquery.com/
modernizr		- https://modernizr.com/
scss			- http://sass-lang.com/
normalize		- https://necolas.github.io/normalize.css/



*****	INSTRUCTIONS	*****
*****************************
1.1 - Globals
--------------------------------------------------------------------------------

The boilerplate requires Gulp and Bower as core dependancies.

run: npm install -g bower
this will install bower globally.

run: npm install -g gulp
this will install gulp globally.

NOTE: Depending on setup you might need to sudo these commands.



1.2 - Project Setup
--------------------------------------------------------------------------------

Select which version of the boilerplate you require (see versions above). The entire boilerplate should be placed inside the new project folder.
-----
run: 'npm install' & 'bower install'
This will pull down all gulp dependances and referenced external libraries.
NOTE: Depending on setup you might need to sudo these commands.
-----
Open package.json and bower.json and update the meta data on the project stored there. 



1.3 - Gulp Tasks
--------------------------------------------------------------------------------

The default gulpfile.js that comes with the boilerplate includes 3 standard gulp tasks.

Default task
The standard task which should be run during development. It will serve index.html from the build folder to the browser. It will watch for changes to html, js and css. Browser sync will run on save to any of these files and instantly update the browser. Additional files to watch can be added inside the 'serve' task if required.

Plugins task
The boilerplate collects all javascript and css from external libraries into single files (plugins.css and plugins.min.js). When new libraries are added the the plugins task needs to be run in order to update these files. They are kept separate from the default task to improve performance. See the below sections for details on adding new libraries.

Release task
The release task must be run prior to deployment. It updates the js and css within the build folder as the default task but also adds minification/uglifying to the output files which are removed from the default task to ease debugging. It also includes an image optimisation task which will optimise jpg,png and gif files in the build/img folder. Optimisation is cached to avoid images becoming lossy. If subfolders are created in the img folder then the 'images' task within the gulp file will need to be updated to reflect the new structure.  



1.3 - SASS Setup
--------------------------------------------------------------------------------

The boiler included SASS as its default css preprocessor. The boilerplate has a set of preexisting files already which include standard generics like typography,navigations,buttons etc. Additional paths need to be added to develop/styles/global.scss and files should be included in the develop/styles/inc folder. The project also includes normalize as its default html5 css reset, this is the same core reset used in Bootstrap and many others.

The utils.scss files includes a number of useful predefined classes including non-selectable elements ( stops users being able to highlight text and images), clearing of children within a parent and horizontal and vertical centering via css transforms. These classes can simply be extended to other selectors to avoid re-writing code or classes can be added to the markup.

Syntax example:

.a-class {
	p {
		@extend .no-sel 
		// This will add the non-selectable attributes to the chosen paragraph tag.
	}
}

The utils.scss also includes a number of present variables where primary and secondary colours can be defined for use global across the remaining sass and a mixin for determining media queries. The options are mobile and tablet. The defaults are mobile at max-width of 720px and tablet at min-width of 720px and max-width of 1200px.

Syntax example:

.a-class {
	// Desktop/global attributes go here

	@include mq(tablet) { 
		// tablet only attributes go here
	}

	@include mq(mobile) { 
		// mobile only attributes go here
	}
}



1.3 - Adding new Libraries
--------------------------------------------------------------------------------

All new libraries or dependancies should be added via bower. This ensures that the individual repos remain as lean and lightweight as possible. The files themselves are ignored by git and pulled down into the local version when step 1 of this guide is completed. 

run: bower install <package> --save

# registered package
	$ bower install jquery --save
# GitHub shorthand
	$ bower install desandro/masonry --save
# Git endpoint
	$ bower install git://github.com/user/package.git --save
# URL
	$ bower install http://example.com/script.js --save


NOTE: ensure that you include --save in order to make sure the package is automatically included in the dependances list of bower.json.

you can use 'bower search <package>' to return a list of registed packages. 

Javascript
--------------------
Once a bower component has been installed locate the path of the js file (or files) to be included. This path will need to be added to the src array of the scripts:plugins task within the gulpfile.

The default array:

gulp.src([
	'bower_components/jquery/dist/jquery.min.js',
	'bower_components/modernizr/src/Modernizr.js'
]) 

Now run the gulp plugins task in order for the new file to be added into the plugins.min.js file.


CSS
--------------------
Once a bower component has been installed locate the path of the css file (or files) to be included. If a plugin requires additional css files they will need to be added to the develop/styles/plugins.scss using the below syntax. 

@import "../../bowercomponents/path/to/file";

NOTE: Do not include an extension in the path! 

Now run the gulp plugins task in order for the new file to be added into the plugins.css file.




*****  OPTIONS/SUGGESTIONS	*****
*********************************
Mobile/tablet javascript detection options if required
--------------------
http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/
http://hgoebl.github.io/mobile-detect.js/
http://web.wurfl.io/#learnmore







*****	CHANGELOG & RELEASE NOTES	*****
*****************************************
v2.0 FriskyDingo	- October 2015	-	Updated to use gulp instead of grunt.	
v1.0 QAPLA!			- May 2015		-	Initial release.