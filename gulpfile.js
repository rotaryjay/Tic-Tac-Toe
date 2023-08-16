'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const revCollector = require('gulp-rev-collector');
const merge = require('merge-stream');

async function getRev() {
  const rev = await import('gulp-rev');
  return rev.default;
}

function copyJs() {
  return gulp.src('app/js/*')
    .pipe(gulp.dest('dist/js'));
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

function copyBackgrounds() {
  return gulp.src('app/img/backgrounds/*.jpg')
    .pipe(gulp.dest('dist/img/backgrounds'));
}

function copyFavicon() {
  return gulp.src('app/img/favicon/*.*')
    .pipe(gulp.dest('dist/img/favicon'));
}

function buildStyles() {
  return gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'))
    .pipe(gulp.dest('dist/css/'));
}

async function gulpRev() {
  const rev = await getRev();

  const cssFiles = gulp.src('app/css/*.css')
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('app/manifest'));

  const jsFiles = gulp.src('app/js/*.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('app/manifest'));

  return merge(cssFiles, jsFiles);
}

async function updateIndex() {
  const rev = await getRev();
  return gulp.src(['app/manifest/rev-manifest.json', 'dist/index.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist'));
}

// Define a task that encapsulates other tasks
const build = gulp.series(
  copyIndex,
  copyJs,
  copyFavicon,
  copyPng,
  copyJpg,
  copyBackgrounds,
  buildStyles,
  gulpRev,
  updateIndex
);

// Define default task
exports.default = build;
