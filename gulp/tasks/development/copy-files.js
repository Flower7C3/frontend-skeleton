var gulp = require('gulp');
var config = require('../../config').copyfiles.development;

/**
 * Copy files to folder
 */
gulp.task('copy:files', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
