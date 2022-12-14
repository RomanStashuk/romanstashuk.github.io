'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Tasks
import html from './html.js';
import sass from './sass.js';
import copy from './copy.js';
import fonts from './fonts.js';
import images from './images.js';
import scripts from './scripts.js';

// Спостереження за файлами
export default () => {
  gulp.watch(path.html.watch, html);
  gulp.watch(path.sass.watch, sass);
  gulp.watch(path.copy.watch, copy);
  gulp.watch(path.js.watch, scripts);
  gulp.watch(path.img.watch, images);
  gulp.watch(path.fonts.watch, fonts);
};
