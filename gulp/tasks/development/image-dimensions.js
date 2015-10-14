var gulp = require('gulp'),
    cssImageDimensions = require("gulp-css-image-dimensions");
var config = require('../../config').imageDimensions.development;

/**
 * Resolve inline CSS
 */
gulp.task('image-dimensions', function () {
    if (config.enabled == true) {
        return gulp.src(config.src)
            .pipe(cssImageDimensions(config.images))
            .pipe(gulp.dest(config.dest));
    }
});