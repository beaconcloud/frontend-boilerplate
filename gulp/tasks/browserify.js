var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');


gulp.task('browserify', function () {

    // `bundleMethod` is determined by
    var bundleMethod = global.isWatching ? watchify : browserify;

    var bundler = bundleMethod({

        // Specify the entry point of your app
        entries: ['./clientapp/main.js'],
    });

    var bundle = function () {

        // Log when bundling starts
        bundleLogger.start();

        return bundler
            // Enable source maps!
            .bundle({ debug: true })
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specify the
            // desired output filename here.
            .pipe(source('app.js'))
            // Specify the output destination
            .pipe(gulp.dest('./public'))
            // Log when bundling completes.
            .on('end', bundleLogger.end);
    };

    if (global.isWatching) {

        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
});