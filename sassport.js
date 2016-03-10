/*jslint node: true */
'use strict';

var fstream      = require('vinyl-fs');
// var process_sass = require('gulp-sass');  //uses node-sass
var process_sass = require('gulp-sassport');  //uses node-sass

  // config files
  var bower = require('./sass-bower.json');
  var dest = './';
  var src = './scss/site.scss';
//console.log('Bower Sass Library Paths \n', bower.paths);

 var done = new Promise( function(resolve,reject){
    fstream.src(src,bower.paths)
      .pipe(process_sass([],{includePaths: bower.paths}))
//    .pipe(process_sass({includePaths: bower.paths}))
          .pipe(fstream.dest(dest))
                 .on('end', resolve )
           ;  //end of stream

  }); //end of Promise

return done;  // return the promise
