var gulp = require('gulp');
var gutil = require('gulp-util');
var prompt = require('gulp-prompt');
var ftp = require('vinyl-ftp');
var config = require('../../config').ftp;

gulp.task('ftp', function () {
    if (config.options.password && config.options.password.length > 0) {
        var conn = ftp.create({
            host: config.options.hostname,
            user: config.options.username,
            password: config.options.password,
            parallel: 10,
            log: gutil.log
        });
        return gulp.src(config.src, {base: config.base, buffer: false})
            .pipe(conn.newer(config.options.destination)) // only upload newer files
            .pipe(conn.dest(config.options.destination));
    } else {
        password = gulp.src('.')
            .pipe(prompt.prompt({
                type: 'password',
                name: 'pw',
                message: 'Enter password for "ftp://' + config.options.username + '@' + config.options.hostname + '"'
            }, function (result) {
                var conn = ftp.create({
                    host: config.options.hostname,
                    user: config.options.username,
                    password: result.pw,
                    parallel: 1,
                    log: gutil.log
                });
                return gulp.src(config.src, {base: config.base, buffer: false})
                    .pipe(conn.newer(config.options.destination)) // only upload newer files
                    .pipe(conn.dest(config.options.destination));
            }));
    }
});
