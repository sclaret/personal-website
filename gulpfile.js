let gulp = require('gulp');

let requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('build', gulp.series('clean',
                               gulp.parallel('css:build',
                                             'js:build',
                                             'images:build',
                                             'html:build:copy'),
                               'html:build:inject'
                              ));

gulp.task('serve', gulp.series('build',
                               gulp.parallel('css:watch',
                                             'js:watch',
                                             'images:watch',
                                             'html:watch',
                                             'browser:init')
                              ));

gulp.task('dist', gulp.series('clean',
                              gulp.parallel('css:dist',
                                            'js:dist',
                                            'images:dist',
                                            'html:dist:copy'),
                              'html:dist:inject'
                             ));

gulp.task('default', gulp.series('serve'));
