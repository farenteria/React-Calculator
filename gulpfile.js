var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("./src/index.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/"));
});

gulp.task("watch-sass", () => {
    return gulp.watch("./src/index.scss", ["sass"]);
});