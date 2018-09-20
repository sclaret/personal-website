let gulp = require('gulp');

let browserSync = require('browser-sync').create();

gulp.task('browser:init', function() {
  browserSync.init({
    server: 'build',
    open: false
  });
  gulp.watch(['build/*.html']).on('change', browserSync.reload);
});
