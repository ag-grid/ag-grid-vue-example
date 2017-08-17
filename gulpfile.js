const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('copy-to-ag-docs', ['copy-to-docs'], (callback) => {
    return gulp.src(['./docs/**/*'], {base: './docs'})
        .pipe(gulp.dest('../ag-grid-docs/src/framework-examples/vue-examples'));
});

gulp.task("copy-to-docs", function (callback) {
    return gulp.src(['./src/**/*', './dist/**/*', './images/**/*'], {base: './'})
        .pipe(gulp.dest('./docs'));
});

gulp.task('clean-nm-ag-grid', () => {
    return del(['node_modules/ag-grid', '!node_modules']);
});

gulp.task('clean-nm-ag-grid-enterprise', () => {
    return del(['node_modules/ag-grid-enterprise', '!node_modules']);
});

gulp.task('clean-nm-ag-grid-vue', () => {
    return del(['node_modules/ag-grid-vue', '!node_modules']);
});

gulp.task('copy-from-ag-grid', () => {
    return gulp.src(['../ag-grid/*', '../ag-grid/dist/**/*'], {base: '../ag-grid'})
        .pipe(gulp.dest('./node_modules/ag-grid'));
});

gulp.task('copy-from-ag-grid-enterprise', () => {
    return gulp.src(['../ag-grid-enterprise/*', '../ag-grid-enterprise/dist/**/*'], {base: '../ag-grid-enterprise'})
        .pipe(gulp.dest('./node_modules/ag-grid-enterprise'));
});

gulp.task('copy-from-ag-grid-vue', () => {
    return gulp.src(['../ag-grid-vue/*', '../ag-grid-vue/dist/**/*'], {base: '../ag-grid-vue'})
        .pipe(gulp.dest('./node_modules/ag-grid-vue'));
});

gulp.task('copy-nm-dirs', (callback) => {
    return runSequence('copy-from-ag-grid', 'copy-from-ag-grid-enterprise', 'copy-from-ag-grid-vue', callback);
});

gulp.task('watch', ['copy-nm-dirs'], () => {
    gulp.watch(['../ag-grid/dist/**/*', '../ag-grid/src/**/*'], ['copy-from-ag-grid']);
    gulp.watch(['../ag-grid-enterprise/dist/**/*', '../ag-grid-enterprise/src/**/*'], ['copy-from-ag-grid-enterprise']);
    gulp.watch(['../ag-grid-vue/dist/**/*', '../ag-grid-vue/src/**/*'], ['copy-from-ag-grid-vue']);
});

gulp.task('watch-vue', ['copy-from-ag-grid-vue'], () => {
    gulp.watch(['../ag-grid-vue/dist/**/*', '../ag-grid-vue/src/**/*'], ['copy-from-ag-grid-vue']);
});
