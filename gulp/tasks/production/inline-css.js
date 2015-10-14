var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
var config = require('../../config').inlineCss.production;

/**
 * Resolve inline CSS
 */
gulp.task('inline-css:production', function () {
    if (config.enabled == true) {
        return gulp.src(config.src)
            .pipe(inlineCss(config.options))
            .pipe(gulp.dest(config.dest));
    }
});