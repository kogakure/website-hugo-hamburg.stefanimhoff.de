var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Generate production build, sync to server and open browser
 */
gulp.task('publish', function() {
  runSequence('production:build', function() {
    console.log('Files ready to sync');
  });
});
