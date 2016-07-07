var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var babel = require('gulp-babel');


gulp.task('clean', function() {
  return del(['dist/**/*.js', 'example/dist/**/*.js']);
});



gulp.task('build', ['clean'], function() {
  // return gulp.src('src/**/*.js')
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
        .pipe(uglify())
        .pipe(concat('angularCircleImg.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('example/dist'));
});



gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});



gulp.task('default', ['watch', 'build']);