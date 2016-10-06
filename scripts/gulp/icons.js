'use strict';

var glob = require('glob');
var gulp = require('gulp');
var path = require('path');
var gulpicon = require('gulpicon/tasks/gulpicon');

// Options to pass to gruntconfig
// See https://github.com/filamentgroup/grunticon#options
var iconsConfig = {
  cssprefix: '.cf-icon-',
  dest: path.join( __dirname, '../../src/cf-icons/src/icons' ),
  enhanceSVG: true,
  previewTemplate: path.join( __dirname, '../templates', 'icon-preview.html.tmpl' ),
  template: path.join( __dirname, '../templates', 'icon-stylesheet.css.tmpl' )
};

var icons = glob.sync('src/cf-icons/src/font-source/svg/**/*.svg');

gulp.task( 'icons', gulpicon(icons, iconsConfig) );
