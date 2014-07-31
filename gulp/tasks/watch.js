var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function () {

    // Place watch tasks for static files (css, images, templates) here
    gulp.watch('templates/**/*.jade', ['jade']);
});