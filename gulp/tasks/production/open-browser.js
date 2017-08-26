var gulp = require('gulp');
var cp = require('child_process');

/**
 * Build the Jekyll Site
 */
gulp.task('open-browser', function(done) {
  return cp.spawn('open', ['http://dev-hamburg.stefanimhoff.de'], { stdio: 'inherit' })
  .on('close', done);
});
