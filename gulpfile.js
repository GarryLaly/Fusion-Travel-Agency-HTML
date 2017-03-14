'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
   gulp.src('./sass/main.sass')
      .pipe(sass())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./css/'));
});

gulp.task('automate', function() {
    gulp.watch(['./sass/*.sass', './sass/components/*.sass'], ['sass']);
});

gulp.task('default', ['sass']);
