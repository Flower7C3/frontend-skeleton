var gulp   = require('gulp');
var rsync  = require('gulp-rsync');
var config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', ['build:production'], function() {
  config.options['root'] = config.base;
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
