const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src([
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/@fortawesome/fontawesome-pro/js/all.min.js',
    'node_modules/chart.js/dist/Chart.bundle.min.js'
  ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src',
    port: 8080
  });

  gulp.watch([
    'src/scss/*.scss', 'src/scss/modules/*.scss', 'src/scss/base/*.scss'
  ], ['sass']);

  gulp.watch('src/*.html').on('change', browserSync.reload);

});


gulp.task('default', ['js','serve'])