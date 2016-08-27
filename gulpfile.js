var gulp        = require('gulp');
var sass        = require('gulp-sass');
var csso        = require('gulp-csso');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var autoprefixer= require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var gutil       = require('gulp-util');
var imageop     = require('gulp-image-optimization');
//var cdnizer     = require("gulp-cdnizer");

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        host: '0.0.0.0',
        /*proxy: "yourlocal.dev"*/
        startPath: "/build/index.html"
    });

    gulp.watch(["develop/styles/inc/*.scss"], ['sass']); //.on('change', browserSync.reload);
    gulp.watch("develop/js/inc/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("build/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("develop/styles/global.scss")
        .pipe(sass()).on('error', function(err, stats) {
            gutil.beep();
            console.error('SASS Error');
            console.error(err.messageFormatted);
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(gulp.dest("build/css/"))
        .pipe(browserSync.stream());
});

gulp.task('sass:plugins', function() {
    return gulp.src("develop/styles/plugins.scss")
        .pipe(sass()).on('error', function(err, stats) {
            gutil.beep();
            console.error('SASS Error');
            console.error(err.messageFormatted);
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(gulp.dest("build/css/vendor/"));
});

gulp.task('sass:release', function() {
    return gulp.src("develop/styles/global.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest("build/css/"))
        .pipe(browserSync.stream());
});

/* Scripts */

gulp.task('scripts', function() {
  return gulp.src('develop/js/inc/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('scripts:release', function() {
  return gulp.src('develop/js/inc/*.js')
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('build/js/'));
});

/* Plugins & Library - includes from bower can be added to the array */

gulp.task('scripts:plugins', function() {
    return gulp.src([
                    'bower_components/jquery/dist/jquery.min.js',
                    //'bower_components/modernizr/src/Modernizr.js'
                    ])
        .pipe(uglify())
        .pipe(concat('plugins.min.js'))
        .pipe(gulp.dest('build/js/'));
});

/* Image Optimisation */
gulp.task('images', function() {
    return gulp.src(["build/img/*.jpg","build/img/*.jpeg","build/img/*.gif","build/img/*.png",])
    .pipe(imageop({
        optimizationLevel:5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('build/img'));
});


gulp.task('release', ['images', 'sass:release', 'scripts:plugins', 'scripts:release']);
gulp.task('plugins', ['scripts:plugins', 'sass:plugins']);
gulp.task('default', ['sass', 'scripts', 'serve']);