var gulp        = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browserSync', ['build'], function () {

    var config = {

        // Serve from the base directory (where `gulpfile.js` lives)
        server: {
            baseDir: './'
        },

        // Watch the following files
        files: [
            "templates/**/*.jade"
        ]
    };

    browserSync(config, function (err) {

        if (!err) {

            console.log("BrowserSync is ready!");
            browserSync.reload();
        }
    });
});