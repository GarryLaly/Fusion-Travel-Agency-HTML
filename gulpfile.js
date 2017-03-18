'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('sass', function() {
   gulp.src('./sass/main.sass')
      .pipe(sass())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./css/'));
});

gulp.task('compress', function() {
  gulp.src([
        'vendors/bootstrap/css/bootstrap.min.css',
        'vendors/font-awesome/css/font-awesome.min.css',
        'vendors/slick/slick.css',
        'vendors/slick/slick-theme.css',
        'css/main.css',
      ])
    .pipe(concat('build.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('automate', function() {
    gulp.watch(['./sass/*.sass', './sass/components/*.sass'], ['sass']);
});

gulp.task('default', ['sass']);
