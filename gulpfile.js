'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const ghPages = require('gulp-gh-pages');
const jshint = require('gulp-jshint');
const rename = require('gulp-rename');

gulp.task('uglify', () => {
    gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./demo'));
});

gulp.task('hint', () => {
  return gulp.src('./src/scrollindo.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./src/scrollindo.js'], ['uglify', 'hint'])
});

gulp.task('connect', () => {
  connect.server({
    root: './demo',
    livereload: true
  });
});

gulp.task('deploy', () => {
  gulp.src('./demo')
  .pipe(ghPages());
});

gulp.task('serve', ['connect', 'watch', 'hint']);
gulp.task('build', ['uglify', 'hint']);
