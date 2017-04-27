var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('docs/examples/algaecal-landingpage/style.css')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('docs/examples/algaecal-landingpage/scss'))
});