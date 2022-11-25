'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Обробка HTML
export default () => {
  return gulp.src(path.html.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(gp.htmlBemValidator())
    .pipe(gulp.dest(path.html.dest))
    .pipe(browserSync.stream());
};
