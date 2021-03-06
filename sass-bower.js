/*jslint node: true */
'use strict';

module.exports = (function() {
var jsonfile = require('jsonfile');
var sass = {};  // holds bower sass/scss library paths

// Let wiredep grab all the bower lib references
var bowerLibs = require('wiredep')({devDependencies :'true'});

// get both .scss and .sass files, both will work with node-sass
if( "scss" in bowerLibs ) { sass.paths = bowerLibs.scss;}
if( "sass" in bowerLibs ) { sass.paths = sass.paths.concat(bowerLibs.sass); }

// libsass wants only the parent directory of each "main" file so remove the filenames
for (var i=0; i<sass.paths.length; i++){
  sass.paths[i] = require('path').dirname(sass.paths[i]);
}

console.log(sass.paths);

jsonfile.writeFile('./sass-bower.json', sass, function (err) {
	  if (err) {console.error(err); return;}
	  });

}());  // immediately run function on require
