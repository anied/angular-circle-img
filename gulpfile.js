var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('clean', function() {
  return del(['dist/angularCircleImg.js', 'dist/angularCircleImg.min.js', 'example/angularCircleImg.js']);
});



gulp.task('build', ['clean'], function() {
  // return gulp.src('src/**/*.js')
  return gulp.src('src/angularCircleImg.js')
    .pipe(gulp.dest('example/js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});



gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});



gulp.task('default', ['watch', 'build']);