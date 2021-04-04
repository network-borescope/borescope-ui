'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

//gulp.task('styles', ['wiredep'],  function () {
gulp.task('styles', [], function () {
  return gulp.src('sass-src/app-styles/**/guideline.scss')
    .pipe($.sass())
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('src/app/styles'))
    .pipe(gulp.dest('src/app/styles/v1'))
    .pipe(gulp.dest('.tmp/styles/v1')) //replica na pasta .tmp
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('src/{app,components}/**/*.js')
    // .pipe($.jshint())
    // .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

/*Copia o arquivo de arquivo de configuração para a pasta dist **/
gulp.task('copy-config-scripts', function () {
  return gulp.src('config/**/*')
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

/*Copia o arquivo de arquivo de configuração para a pasta dist **/
gulp.task('copy-resources', function () {
  return gulp.src('src/resources/**/*')
    .pipe(gulp.dest('dist/resources'))
    .pipe($.size());
});

/*Copia o arquivo de arquivo de configuração para a pasta dist **/
gulp.task('copy-release', function () {
  return gulp.src('release/**/*')
    .pipe(gulp.dest('dist/release'))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src('src/{app,components}/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'RnpAgendamentoWeb'
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe($.size());
});

//gulp.task('html', ['styles', 'scripts', 'partials'], function () {
gulp.task('html', ['scripts', 'partials'], function () {

  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src('src/*.html')
    .pipe($.inject(gulp.src('.tmp/{app,components}/**/*.js'), {
      read: false,
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      addPrefix: '../'
    }))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest('dist'))
    .pipe($.size());

});

gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    //.pipe($.cache($.imagemin({ //verificar forma de limpar o cache dando problema
    /*.pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))*/
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src("src/**/*")
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/resources/fonts'))
    .pipe($.size());
});

gulp.task('misc', function () {
  return gulp.src('src/**/*.ico')
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('clean', function (done) {
  $.del(['.tmp', 'dist'], done);
});

gulp.task('build', ['copy-release', 'copy-config-scripts', 'html', 'misc', 'images']);
//TODO: removido a cópia das imagens
//gulp.task('build', ['copy-resources', 'copy-release', 'copy-config-scripts', 'html', 'images', 'fonts', 'misc']);
//gulp.task('build', ['copy-resources', 'copy-release', 'copy-config-scripts', 'copy-app-styles-to-build', 'copy-vendors-styles-to-build', 'html', 'images', 'fonts', 'misc']);
