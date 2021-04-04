'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('sass-src/**/*.scss', ['styles']);
  gulp.watch('src/{app,components}/**/*.js', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  //gulp.watch('bower.json', ['wiredep']);
});
