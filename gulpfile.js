var gulp         = require('gulp'), // Gulp
    browsersync  = require('browser-sync'), // Browser-Sync
    plumber      = require('gulp-plumber');

//
// Start Browser-Sync server
//


gulp.task('html', function(){
  gulp.src('*.html')
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('css', function(){
  gulp.src('style/*.css')
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('js', function(){
  gulp.src('js/*.js')
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('browsersync-server', function(){
  browsersync.init(null, {
    server: {baseDir: './'},
    open: true,
    notify: false
  });
});
//
// WATCH TASK
//

gulp.task('watch', function(){
  gulp.watch('*.html', ['html']);
  gulp.watch('./style/*.css', ['css']);
  gulp.watch('./js/*.js', ['js']);
});

//
// DEFAULT TASK
//

gulp.task('default', [
  'html', 'css', 'js', 'browsersync-server', 'watch'
]);
