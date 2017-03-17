const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', () => {
  return gulp.src('styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['styles']
    }))
    .pipe(concat('styles.css'))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css'))
})

gulp.task('watch', ['styles'], () => {
  return gulp.watch('styles/**/*.scss', ['styles'])
})
