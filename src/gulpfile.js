var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var webpack = require('webpack-stream');
var gulpConfig = require('./gulp.config');

var sassOpts = {
  outputStyle: 'compressed'
};

var exec = require('child_process').exec;

// Tasks
gulp.task('default', ['scripts']);

gulp.task('scripts', function() {
	return gulp.src(gulpConfig.scripts.paths.entry)
		.pipe(webpack(gulpConfig.webpack))
    .pipe(minify({ noSource: true }))
		.pipe(connect.reload())
		.pipe(gulp.dest(gulpConfig.scripts.paths.output.prod));
});

gulp.task('refresh_extension', function(){
  exec("open http://reload.extensions", null);
});

gulp.task('sass', function() {
  return gulp.src(gulpConfig.styles.paths.entry)
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(gulp.dest(gulpConfig.styles.paths.output.prod))
});

gulp.task('watch', ['default'], function() {
	gulp.watch(gulpConfig.scripts.paths.all, ['scripts', 'refresh_extension']);
	gulp.watch(gulpConfig.styles.paths.all, ['sass', 'refresh_extension']);
	connect.server({
		port: gulpConfig.connect.port,
		root: gulpConfig.ports.expressRoot,
		livereload: true
	});
});



