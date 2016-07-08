// Based largely on https://gist.github.com/danharper/3ca2273125f500429945
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var concat = require('gulp-concat');
var del = require('del');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');


function compile(watch, debug_flag) {
  var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel, {presets: ["es2015"]}));

  var uglifyOptions = {
    mangle: !debug_flag,
    compress: {
      drop_debugger: !debug_flag
    }
  };

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('dist/angularCircleImg.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(ngAnnotate())
      .pipe(uglify(uglifyOptions))
      .pipe(concat('angularCircleImg.min.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'))
      .pipe(gulp.dest('./example/dist/'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true, false);
}

function watch_debug() {
  return compile(true, true);
}

gulp.task('clean', function() {
  return del(['dist/**/*.js', 'dist/**/*.map', 'example/dist/**/*.js', 'example/dist/**/*.map']);
});

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('watch_debug', function() { return watch_debug(); });

gulp.task('develop', ['watch']);
gulp.task('develop:debug', ['watch_debug']);