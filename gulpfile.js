'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
}
function copyIndex() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
}
function copyImg() {
    return gulp.src('app/img/*')
        .pipe(gulp.dest('dist/img'))
}
function copyJs() {
    return gulp.src('app/js/*')
        .pipe(gulp.dest('dist/js'))
}

exports.buildStyles = buildStyles;
exports.copyIndex = copyIndex;
exports.copyImg = copyImg;
exports.copyJs = copyJs;