'use strict';

var glob = require('glob');
var gulp = require('gulp');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var gulpicon = require('gulpicon/tasks/gulpicon');

var config = {};
config.dest = path.join( __dirname, '../../src/cf-icons/src/icons' );
config.cssprefix = '.cf-icon-';
config.template = path.join( __dirname, '../templates', 'icon-stylesheet.css.tmpl' );
config.previewTemplate = path.join( __dirname, '../templates', 'icon-preview.html.tmpl' );
// config.defaultWidth = '17.325'
// config.defaultHeight = '16'

// console.log(path.join( __dirname, '../templates', 'preview-custom.html.tmpl' ));

var icons = glob.sync('src/cf-icons/src/font-source/svg/**/*.svg');

// gulp.task('icons:optimize', function() {
//     return gulp.src(icons)
//         .pipe(plugins.svgmin())
//         .pipe(gulp.dest(config.src));
// });

// gulpicon doesn't support streams so we give it its own task that
// instructs svgo to run first
gulp.task('icons', gulpicon(icons, config));
