'use strict';

var gulp = require('gulp'),
	eslint = require('gulp-eslint'),		//https://github.com/adametry/gulp-eslint
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

//lint JavaScript
gulp.task('eslint', function () {
    return gulp.src(['public/scripts/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

// watch files for changes & reload
gulp.task('serve', function () {
    browserSync({
        notify: false,
        logPrefix: 'WSK',
        server: ['public']
    });

    gulp.watch(['public/**/*.html'], reload);
    gulp.watch(['public/styles/**/*.css'], reload);
    gulp.watch(['public/scripts/**/*.js'], ['eslint', reload]);
});

gulp.task('default', ['eslint'], function () {
    // This will only run if the lint task is successful...
});