'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var argv = require('yargs').argv;

gulp.task('jshint-test', function () {
  return gulp.src('test/unit/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('test', function() {
  //var bowerDeps = wiredep({
  //  directory: 'src/bower_components',
  //  exclude: ['bootstrap-sass-official'],
  //  dependencies: true,
  //  devDependencies: true
  //});
  var bowerDeps = {
    js: [
      "src/bower_components/jquery/jquery.js",
      "src/bower_components/moment/moment.js",
      "src/bower_components/angular/angular.js",
      "src/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
      "src/bower_components/underscore/underscore.js",
      "src/bower_components/angular-ui-date/src/date.js",
      "src/bower_components/angular-ui-router/release/angular-ui-router.js",
      "src/bower_components/angular-ui-utils/ui-utils.js",
      "src/bower_components/angular-ui-select/dist/select.min.js",
      "src/bower_components/angular-mocks/angular-mocks.js",
      "src/bower_components/angular-sanitize/angular-sanitize.min.js",
      "src/bower_components/angular-animate/angular-animate.min.js",
      "src/bower_components/ngDialog/js/ngDialog.min.js",
      "src/bower_components/ng-grid/build/ng-grid.js",
      "src/bower_components/ng-grid/plugins/ng-grid-flexible-height.js",
      "src/bower_components/angular-translate/angular-translate.min.js",
      "src/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
      "src/bower_components/angular-message-center/message-center-templates.js",
      "src/bower_components/angular-message-center/message-center.js",
      "src/bower_components/spin.js/spin.js",
      "src/bower_components/checklist-model/checklist-model.js",
      "src/bower_components/angular-match/angular-match.js",
      "src/bower_components/angular-ui-calendar/src/calendar.js",
      "src/bower_components/fullcalendar/dist/fullcalendar.js",
      "src/bower_components/fullcalendar/dist/gcal.js",
      "src/bower_components/fullcalendar/dist/lang/pt-br.js",
      "src/bower_components/highcharts-release/highcharts.js",
      "src/bower_components/highcharts-ng/dist/highcharts-ng.js"
    ]
  }
  var testFiles = bowerDeps.js.concat([
    '!src/app/config/init.js',
    'config/**/*.js',
    'src/app/app.js',
    'src/app/**/*.js',
    'src/app/views/**/*.html',
    'test/unit/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: (argv.run ? 'run' : 'watch'),
      browsers: (argv.run ? ['PhantomJS'] : ['Chrome']),
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
