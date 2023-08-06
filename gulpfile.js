'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('app/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/style.css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('app/scss/styles.scss', ['sass']);
};