let gulp = require('gulp');

let del = require('del');

gulp.task('clean', function() {
  return del(['build', 'dist']);
});
