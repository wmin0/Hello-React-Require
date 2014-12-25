var gulp = require('gulp')
  , sass = require('gulp-ruby-sass')
  , rename = require('gulp-rename')
  , autoprefixer = require('gulp-autoprefixer')
  , minifycss = require('gulp-minify-css')
  , jshint = require('gulp-jshint')
  , uglify = require('gulp-uglify')
  , notify = require('gulp-notify')
  , del = require('del')
  , cache = require('gulp-cache')
  , imagemin = require('gulp-imagemin')
  , livereload = require('gulp-livereload')
  , concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'));
    //.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {  
  return gulp.src('src/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
//    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
    //.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {  
  return gulp.src('src/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/img'));
    //.pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {  
  return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('default', ['clean'], function() {  
  gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/styles/*.scss', ['styles']);
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/images/*', ['images']);
/*
  gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });
*/
});
