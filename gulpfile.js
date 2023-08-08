'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Change this require to a dynamic import
async function getRev() {
  const rev = await import('gulp-rev');
  return rev.default;
}

async function revCss() {
  const rev = await getRev();
  return gulp.src('app/css/style.css')
    .pipe(rev())
    .pipe(gulp.dest('app/css'))
}

function buildStyles() {
  return gulp.src('app/scss/style.scss')
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

function copySvg() {
  return gulp.src('app/img/*.svg')
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
exports.default = gulp.parallel(revCss, buildStyles, copyIndex, copyPng, copyJpg, copySvg, copyFavicon, copyJs);
