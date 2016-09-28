'use strict';

var gulp = require('gulp');
var browserSync = require("browser-sync");
var config = require("./config");

gulp.task('dev', ['styles', 'html', 'assets'], function() {

    browserSync.init({
        server: "./docs",
        port: config.port
    });

    gulp.watch(config.html.src, ['html']);
    gulp.watch(config.styles.glob, ['styles']);
    gulp.watch(config.assets.src, ['assets']);
    gulp.watch(config.html.src).on('change', browserSync.reload);
    gulp.watch(config.styles.glob).on('change', browserSync.reload);
    gulp.watch(config.assets.src).on('change', browserSync.reload);
});
