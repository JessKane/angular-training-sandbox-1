var gulp = require('gulp'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	connect = require('gulp-connect');

// Creates and starts the server. Serves files from www folder. Node server.
gulp.task('connect', function() {
	connect.server({
		root: 'www',
		livereload: true
	});
})

// HTML task - Grabs HTML files and sends them to the server
gulp.task('html', function() {
	gulp.src('www/*.html')
		.pipe(connect.reload());
})

// watch task - Watch all of our HTML files and send them to another task
gulp.task('watch', function() {
	gulp.watch(['www/*.html'], ['html']);
})

gulp.task('default', ['connect', 'watch']);
