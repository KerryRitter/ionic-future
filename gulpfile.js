var gulp = require('gulp');
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");

gulp.task('default', ["compile:ts"]);

gulp.task('watch', function() {
    gulp.watch(["./**/*.ts"], ["compile:ts"]);
});

gulp.task("lint:ts", function() {
    return gulp.src("ionic-future-app.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

var tsProject = ts.createProject("tsconfig.json", {
    outFile: "ionic-future.js"
});
gulp.task("compile:ts", ["lint:ts"], function() {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest("dist"));
});