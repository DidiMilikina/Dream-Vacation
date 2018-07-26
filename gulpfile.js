var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    // Other watchers
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/style.scss')
        .pipe(sass({ sourcemap: true }))
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css/style.min.css'));
})

gulp.task('js', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'))
});

gulp.task('default', ["sass","js","watch"]);