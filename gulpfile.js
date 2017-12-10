var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
// var uglify = require('gulp-uglify');
// var coffee = require('gulp-coffee');
// var concat = require('gulp-concat');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
// var del = require('del');

gulp.task('css', function () {
    return gulp.src('static/css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/build/css'));
});

gulp.task('js', function () {
    return gulp.src('static/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('static/build/js'));
});

//Watch task
gulp.task('watch_css', function () {
    gulp.watch('static/css/*.sass', ['css']);
});

gulp.task('watch_babel', function () {
    gulp.watch('static/js/*.js', ['js']);
});