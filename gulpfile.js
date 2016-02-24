/*********************************************************************
Plugins definition
*********************************************************************/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var tasks = require('gulp-task-listing');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

//TODO: compare with https://github.com/contra/gulp-cached
var changed = require('gulp-changed');  
var gls = require('gulp-live-server');

/*********************************************************************
Paths storage
*********************************************************************/

var target = {
    dest : 'dist',
    js : 'app/js/*.js',
    css: 'dist/css',
    start: 'app/js/index.js',
    sass: 'app/scss/*.scss'    
};

/*********************************************************************
Errors handling
*********************************************************************/


    

/*********************************************************************
Main tasks
*********************************************************************/

gulp.task('default', function() {
    return tasks.withFilters(null, 'default')();
});

gulp.task('serve', function() {
  //2. serve at custom port 
    var server = gls.new(target.start);
  server.start();
 
  //use gulp.watch to trigger server actions(notify, start or stop) 
  gulp.watch(['**/*.css', '**/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('build',['lint','scripts','sass']);

/*********************************************************************
File management
*********************************************************************/

//TODO: add some jspm / requireJS style plugin

gulp.task('scripts', ['lint'], function() {
  return gulp.src(target.js)
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(jshint())
  .pipe(jshint.reporter('cool-reporter'))
  .pipe(gulp.dest(target.dest));
});

gulp.task('lint', function() {
  return gulp.src([target.js, target.start, 'gulpfile.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('cool-reporter'))
      .on('error', function (error) {
        console.error('' + error);
        });
});

gulp.task('sass', function () {
  return gulp.src(target.sass)
   .pipe(plumber(function () {
            console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
            this.emit('end');
        }))
    .pipe(changed(target.css))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(target.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(target.sass, ['sass']);
});

/*********************************************************************
Workbench
*********************************************************************/

gulp.task('lintWatch', function() {
    gulp.watch([target.js,'*.js']).on('change', function(){
        gulp.src(target.js)
        .pipe(jshint())
        .on('done', function(){ gutil.log('Almost there...'); })
        .pipe(jshint.reporter('cool-reporter'));
    });
});

gulp.task('test', function() {


    (function(txt) {
        return console.log(txt);
    })('demo');
      
    
});

// gutil.log(gutil.colors.green('Started...'));
