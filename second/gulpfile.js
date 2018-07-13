var gulp = require('gulp');
var sass = require('gulp-sass-china');
var imagemin = require('gulp-imagemin');
gulp.task('sass', function() {
    gulp.src('2.scss')
    .pipe(sass())
    .pipe(gulp.dest('sass'))
})

gulp.task('imagemin', function() {
    gulp.src('images/1_03.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
})

gulp.task('jsmin', function() {
    gulp.src('2.js')
    .pipe(jsmin())
    .pipe(gulp.dest('js'))
})
