var gulp = require('gulp');
var sass = require('gulp-sass');
// var coffee = require('gulp-coffee');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
// var del = require('del');

gulp.task('styles', function () {
    return gulp.src('views/css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('views/css'));
});

//Watch task
gulp.task('watch_css', function () {
    gulp.watch('views/css/*.sass', ['styles']);
});