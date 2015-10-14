var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
var config = require('../../config').inlineCss.development;

/**
 * Resolve inline CSS
 */
gulp.task('inline-css', function () {
    if (config.enabled == true) {
        return gulp.src(config.src)
            .pipe(inlineCss(config.options))
            .pipe(gulp.dest(config.dest));
    }
});