let gulp = require('gulp');

let concat = require('gulp-concat');
let rev = require('gulp-rev');

gulp.task('css:build', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('build/css'));
});

gulp.task('css:watch', function() {
  gulp.watch('src/css/**/*.css',
             gulp.series('css:build'));
});

gulp.task('css:dist', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('app.css'))
    .pipe(rev())
    .pipe(gulp.dest('dist/assets'));
});
