var gulp = require('gulp');
var jade = require('gulp-jade');


gulp.task('jade', function () {

    gulp.src('./templates/index.jade')
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('./'));
});