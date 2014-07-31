var gulp = require('gulp');
var jshint = require('gulp-jshint');


gulp.task('hint', function () {

    gulp.src(['./source/main.js', './source/View/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});