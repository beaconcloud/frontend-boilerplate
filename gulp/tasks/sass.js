var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {

    gulp.src('./styles/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'))
});