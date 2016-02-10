var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');



// Web server + livereload
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
	opn('http://localhost:8888');
});



// Work with js
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});



// Watch
gulp.task('watch', function () {
	gulp.watch(['./app/js/*.js'], ['js']);
});



// Default task
gulp.task('default', ['connect', 'watch']);