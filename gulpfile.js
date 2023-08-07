'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('app/scss/style3.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
}

function copyIndex() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
}

function copyPng() {
  return gulp.src('app/img/*.png')
    .pipe(gulp.dest('dist/img'));
}

function copyJpg() {
  return gulp.src('app/img/*.jpg')
    .pipe(gulp.dest('dist/img'));
}

function copyFavicon() {
  return gulp.src('app/img/favicon/*')
    .pipe(gulp.dest('dist/img/favicon'));
}

function copyJs() {
  return gulp.src('app/js/*')
    .pipe(gulp.dest('dist/js'));
}

// Define a default task that runs all the tasks in parallel
exports.default = gulp.parallel(buildStyles, copyIndex, copyPng, copyJpg, copyFavicon, copyJs);