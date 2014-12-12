'use strict';
var gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	notify = require('gulp-notify'),
	plumber = require("gulp-plumber");

// directory
var dir = {
	current: 'htdocs',
	css: 'htdocs/css',
	sass: 'htdocs/sass',
	js: 'htdocs/js',
	min: 'htdocs/min',
	partials: 'htdocs/sass/partials'
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
		title: 'Gulp',
		message: "Error: <%= error.message %>"
	})
};

// typing "gulp" on the command line let all tasks run
gulp.task('default', ['browser-sync', 'watch', 'js', 'compass']);

// set up localhost and synchronize browser
gulp.task('browser-sync', function () {
    browserSync({
        port: 8100,
        browser: "google chrome",
        server: {
			baseDir: dir.current
        }
    });
});

// reload browser when js / html file changes
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// execute compass
gulp.task('compass', function() {
	gulp.src(dir.sass + '/*.scss')
	.pipe(plumber(plumberErrorHandler))
	.pipe(compass({
		config_file: 'config.rb',
		css: dir.css,
		sass: dir.sass
	}))
	.pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest(dir.css))
	.pipe(browserSync.reload({stream: true}));
});

// minify js
gulp.task('js', function() {
    return gulp.src([dir.js + '/*.js','!' + dir.min + '/*.js'])
		.pipe(plumber(plumberErrorHandler))
        .pipe(uglify())
        .pipe(gulp.dest(dir.min))
        .pipe(browserSync.reload({stream: true}));
});

/// watch
gulp.task('watch', function() {
	gulp.watch(dir.js + '/*.js',['js','bs-reload']);
	gulp.watch(dir.sass + '/*.scss', ['compass']);
	gulp.watch(dir.partials + '/*.scss', ['compass']);
	gulp.watch(dir.current + '/*.html',['bs-reload']);
});