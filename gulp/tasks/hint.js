var gulp = require('gulp');
var jshint = require('gulp-jshint');


gulp.task('hint', function () {

    gulp.src(['./clientapp/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});