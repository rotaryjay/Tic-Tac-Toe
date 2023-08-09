'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const revCollector = require('gulp-rev-collector');

// Change this require to a dynamic import
async function getRev() {
  const rev = await import('gulp-rev');
  return rev.default;
}

function copyJs() {
  return gulp.src('app/js/*')
  .pipe(gulp.dest('dist/js'))
}

function copyIndex() {
  return gulp.src('app/index.html')
  .pipe(gulp.dest('dist'))
}

function copyPng() {
  return gulp.src('app/img/*.png')
  .pipe(gulp.dest('dist/img'))
}

function copyJpg() {
  return gulp.src('app/img/*.jpg')
  .pipe(gulp.dest('dist/img'))
}

function copyBackgrounds() {
  return gulp.src('app/img/backgrounds/*.jpg')
  .pipe(gulp.dest('dist/img/backgrounds'))
}

function copyFavicon() {
  return gulp.src('app/img/favicon/*.*')
  .pipe(gulp.dest('dist/img/favicon'))
}


function buildStyles() {
  return gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'))
    .pipe(gulp.dest('dist/css/'))
}

async function gulpRev() {
  const rev = await getRev()
  return gulp.src(['app/css/*.css', 'app/js/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('app/manifest'))
}

async function updateIndex() {
  const rev = await getRev();
  return gulp.src(['app/manifest/rev-manifest.json', 'dist/index.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe( gulp.dest('dist') );
}

// Define other task functions here...

// Define task for updating references


// Define a task that encapsulates other tasks
const build = gulp.series(copyIndex, copyJs, copyFavicon, copyPng, copyJpg, copyBackgrounds, buildStyles, gulpRev, updateIndex);

// Define default task
exports.default = build;
