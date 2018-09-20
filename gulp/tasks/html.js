let gulp = require('gulp');

let conf = require('../gulpconfig');

let inject = require('gulp-inject');

gulp.task('html:build:copy', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('html:build:inject', function() {
  let assets = gulp.src(['build/css/**/*.css',
                         'build/js/**/*.js',
                         'build/images/**/*.{png,jpg}'],
                        { read: false });
  let injectOpts = { removeTags: true,
                     relative: true
                   };
  return gulp.src('build/index.html')
    .pipe(inject(assets, injectOpts))
    .pipe(gulp.dest('build'));
});

gulp.task('html:watch', function() {
  gulp.watch( ['src/*.html',
               'build/css/**/*.css',
               'build/js/**/*.js',
               'build/images/**/*.{png,jpg}'],
              gulp.series('html:build:copy', 'html:build:inject'));
});

gulp.task('html:dist:copy', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('html:dist:inject', function() {
  let assets = gulp.src(['dist/assets/*.css',
                         'dist/assets/*.js',
                         'dist/assets/*.{png,jpg}'],
                        { read: false });
  let injectOpts = { removeTags: true,
                     ignorePath: 'dist',
                     addRootSlash: false,
                     addPrefix: conf.dist.cdn.prefix
                   };
  return gulp.src('dist/index.html')
    .pipe(inject(assets, injectOpts))
    .pipe(gulp.dest('dist'));
});
