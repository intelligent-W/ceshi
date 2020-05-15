let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let babel = require("gulp-babel");
let imgmin = require("gulp-imagemin");
let uglify = require("gulp-uglify");
let cssmin = require("gulp-clean-css");
let concat = require("gulp-uglify");
let connect = require("gulp-connect");
let sass = require("gulp-sass");

// 监听
gulp.task("default", async() => {
    gulp.watch("./src/*.html", async() => {
        gulp.src("./src/*.html")
            .pipe(htmlmin({
                collapseWhitespace: true,
            }))
            .pipe(gulp.dest("d:\\phpStudy\\WWW\\XIAOMI"));
    })
    gulp.watch("./src/js/*.js", async() => {
        gulp.src("./src/js/*.js")
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest("d:\\phpStudy\\WWW\\XIAOMI\\js"));
    })

    gulp.watch("./src/PHP/**/*", async() => {
        gulp.src("./src/PHP/**/*")
            .pipe(gulp.dest("d:\\phpStudy\\WWW\\XIAOMI\\PHP"));
    })
    gulp.watch("./src/img/**/*", async() => {
        gulp.src("./src/img/**/*")
            .pipe(gulp.dest("d:\\phpStudy\\WWW\\XIAOMI\\img"));
    });


    // sass编译
    gulp.watch("./src/scss/*.scss", async() => {
        gulp.src("./src/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("d:\\phpStudy\\WWW\\XIAOMI\\css"));
    })

})