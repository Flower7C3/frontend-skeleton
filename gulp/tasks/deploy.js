var gulp = require('gulp');
var runSequence = require('run-sequence');
var configFTP = require('../config').ftp;
var configRSYNC = require('../config').rsync;

/**
 * Start rsync task
 */
gulp.task('deploy', ['build:production'], function(){
    if(Object.keys(configFTP.options).length > 0){
        runSequence('ftp');
    }
    if(Object.keys(configRSYNC.options).length > 0){
        runSequence('rsync');
    }
});
