let gulp = require('gulp');

let concat = require('gulp-concat');
let rev = require('gulp-rev');

gulp.task('js:build', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'));
});

gulp.task('js:watch', function() {
  gulp.watch('src/js/**/*.js',
             gulp.series('js:build'));
});

gulp.task('js:dist', function(done) {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(rev())
    .pipe(gulp.dest('dist/assets'));
});
