var gulp = require('gulp');
var config = require('../../config').copyfiles.production;

/**
 * Copy files to folder
 */
gulp.task('copy:files:production', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
