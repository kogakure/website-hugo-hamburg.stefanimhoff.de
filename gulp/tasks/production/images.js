var gulp = require('gulp');
var config = require('../../config').productionImages;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('production:images', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
