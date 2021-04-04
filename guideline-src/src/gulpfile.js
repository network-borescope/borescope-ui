var gulp      = require('gulp'),
	fs          = require('fs'),
	gutil       = require('gulp-util'),
	clean       = require('gulp-clean'),
	rename      = require("gulp-rename"),
	jshint      = require('gulp-jshint'),
	sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
	sourcemaps  = require('gulp-sourcemaps'),
	uglify      = require('gulp-uglify')
	zip         = require('gulp-zip')
,

	getPackageJson = function () {
		return JSON.parse(fs.readFileSync('./bower.json', 'utf8'));
	},



	input  = {
		'sass'          : 'styles/**/*.scss',
		'javascript'    : 'scripts/**/*.js',
		'guidelineApp'  : '../release/**/*'
	},

	output          = '../release',
	outputResources = '../release/resources',
	outputRelease   =  '../guidelineApp/release'

	js_vendors_files = [
		'bower_components/jquery/jquery.js',
		'bower_components/jquery-ui/ui/jquery-ui.js',
		'bower_components/jquery-ui/ui/i18n/jquery.ui.datepicker-pt-BR.js',
		'vendors_hotfixes/jquery-ui/tooltip-conflict.js',
		'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
		'bower_components/spin.js/spin.js',
		'bower_components/spin.js/jquery.spin.js',
		'bower_components/underscore/underscore.js',
		'bower_components/combodate/combodate.js',
		'bower_components/highcharts/*.js',
		'bower_components/highcharts/modules/*.js',
		'bower_components/moment/moment.js',
		'bower_components/moment-duration-format/lib/moment-duration-format.js',
		'bower_components/fullcalendar/dist/fullcalendar.js',
		'bower_components/fullcalendar/dist/gcal.js',
		'bower_components/fullcalendar/dist/lang/pt-br.js',
		'bower_components/select2/dist/js/select2.js',
		'bower_components/datatables/media/js/jquery.dataTables.js',
		'bower_components/jquery-meiomask/dist/meiomask.js',
		'bower_components/jquery-validation/dist/jquery.validate.js',
		'bower_components/jquery-validation/dist/additional-methods.js',
		'bower_components/jquery.livequery/dist/jquery.livequery.js',
	]

;

/* run javascript through jshint */
gulp.task('jshint', function() {
	return gulp.src(input.javascript)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

/* compile scss files */
gulp.task('build-css', ['clean-all'], function() {
	var pkg = getPackageJson();
	return gulp.src('styles/*.scss')
		.pipe(sass())
		.pipe(
			rename(function(path){
				path.basename += "-" + pkg.version
				path.extname  = ".css"
			})
		)
		.pipe(gulp.dest(output))
	;
});

gulp.task('zip-files', ['clean-all', 'copy-resources', 'build-vendors-js', 'build-js', 'build-css'],function () {
	var pkg = getPackageJson();

	return gulp.src(input.guidelineApp)
		.pipe(zip('rnp-guideline-v' + pkg.version +'.zip'))
		.pipe(gulp.dest(output))
		;
});


gulp.task('clean-all', function () {
	return gulp.src(['../release/', '../guidelineApp/src/release'])
		.pipe(clean({force: true}));
});

gulp.task('copy-resources',  ['clean-all'], function () {
	return gulp.src('./resources/**/*')
		.pipe(gulp.dest(outputResources));
});

gulp.task('copy-release', ['zip-files','build-vendors-js', 'build-js', 'build-css', 'copy-resources'], function () {
	return gulp.src(input.guidelineApp)
		.pipe(gulp.dest(outputRelease));
});


/* concat vendors javascript files, minify if --type production */
gulp.task('build-vendors-js', ['clean-all'], function() {

	var pkg = getPackageJson();
	return gulp.src(js_vendors_files)
		.pipe(concat('vendors-' + pkg.version +'.js'))
		.pipe(gulp.dest(output))
		.pipe(uglify())
		.pipe(
			rename(function(path){
				path.basename += ".min"
				path.extname  = ".js"
			})
		)
		.pipe(gulp.dest(output))
	;
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', ['clean-all'], function() {
	var pkg = getPackageJson();
	return gulp.src(input.javascript)
		.pipe(concat('guideline-' + pkg.version +'.js'))
		.pipe(gulp.dest(output))
		.pipe(uglify())
		.pipe(
			rename(function(path){
				path.basename += ".min"
				path.extname  = ".js"
			})
		)
		.pipe(gulp.dest(output))
	;
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
	gulp.watch(input.javascript, ['jshint', 'build-js']);
	gulp.watch(input.sass, ['build-css']);
});

/* run the watch task when gulp is called without arguments */
gulp.task('build', ['clean-all', 'build-vendors-js','build-js', 'build-css', 'copy-release', 'zip-files']);
gulp.task('default', ['build']);