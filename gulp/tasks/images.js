let gulp = require('gulp');

let rev = require('gulp-rev');

gulp.task('images:build', function() {
  return gulp.src('src/images/**/*.{png,jpg}')
    .pipe(gulp.dest('build/images'));
});

gulp.task('images:watch', function() {
  gulp.watch('src/images/**/*.{png,jpg}',
             gulp.series('images:build'));
});

gulp.task('images:dist', function() {
  return gulp.src('src/images/**/*.{png,jpg}')
    .pipe(rev())
    .pipe(gulp.dest('dist/assets'));
});
