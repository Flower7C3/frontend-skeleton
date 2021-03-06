var gulp = require('gulp');
var gzip = require('gulp-gzip');
var config = require('../../config').gzip;

/**
 * Gzip text files
 */
gulp.task('gzip', function () {
    if (config.enabled == true) {
        return gulp.src(config.src)
            .pipe(gzip(config.options))
            .pipe(gulp.dest(config.dest));
    }
});
