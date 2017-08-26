var gulp = require('gulp');
var responsive = require('gulp-responsive');
var changed = require('gulp-changed');
var config = require('../../config').responsive;

gulp.task('responsive', function() {
  return gulp.src(config.src)
    .pipe(changed('resize/'))
    .pipe(gulp.dest('resize/'))
    .pipe(responsive(config.options, config.global))
    .pipe(gulp.dest(config.dest));
});
