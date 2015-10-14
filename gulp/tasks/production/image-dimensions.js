var gulp = require('gulp'),
    cssImageDimensions = require("gulp-css-image-dimensions");
var config = require('../../config').imageDimensions.production;

/**
 * Resolve inline CSS
 */
gulp.task('image-dimensions:production', function () {
    if (config.enabled == true) {
        return gulp.src(config.src)
            .pipe(cssImageDimensions(config.images))
            .pipe(gulp.dest(config.dest));
    }
});