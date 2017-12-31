'use strict';

let gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
    qcmq = require('gulp-group-css-media-queries'),
    smartgrid = require('smart-grid'),
    includer = require('gulp-file-include'),
    settings = {
        outputStyle: 'sass',
        // Выбор препроцессора
        /* less || scss || sass || styl */
        columns: 12,
        /* number of grid columns */
        offset: "30px",
        /* gutter width px || % */
        container: {
            maxWidth: '1200px',
            /* max-width оn very large screen */
            fields: '30px' /* side fields */
        },
        breakPoints: {
            lg: {
                'width': '1100px',
                /* -> @media (max-width: 1100px) */
                'fields': '30px' /* side fields */
            },
            md: {
                'width': '960px',
                'fields': '15px'
            },
            sm: {
                'width': '780px',
                'fields': '15px'
            },
            xs: {
                'width': '560px',
                'fields': '15px'
            }
        }
    };

gulp.task('smartgrid', function () {
    smartgrid('src/css', settings);
});


gulp.task('sass', function () { // Создаем таск Sass
    return gulp.src('src/css/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        })) // Создаем префиксы
        .pipe(qcmq())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        })) // Обновляем CSS на странице при изменении
});

// gulp.task('scss', function () { // Создаем таск Sass
//     return gulp.src('src/css/**/*.scss') // Берем источник
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .on('error', function(error){
//             console.log(error.message);
//             this.end();
//         })
//         .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
//             cascade: true
//         })) // Создаем префиксы
//         .pipe(qcmq())
//         .pipe(gulp.dest('src/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         })) // Обновляем CSS на странице при изменении
// });

gulp.task('qcmq', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(qcmq())
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function () {
    return gulp.src([ // Берем все необходимые библиотеки
            // 'src/js/preloader.js',
            // 'src/js/string.js',
            // 'src/js/array.js',
            // 'src/js/Date.js'
            // 'src/js/main.js'
        ])
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле vendors.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});

gulp.task('css-libs', ['sass'], function () {
    return gulp.src('src/css/libs.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({
            suffix: '.min'
        })) // Добавляем суффикс .min
        .pipe(gulp.dest('src/css')); // Выгружаем в папку src/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'includer', 'scripts'], function () {
    gulp.watch('src/css/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    // gulp.watch('src/css/**/*.scss', ['scss']); // Наблюдение за sass файлами в папке sass
    gulp.watch('src/**/*.html', ['includer']); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/**/*.js', browserSync.reload({
        stream: true
    })); // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function () {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function () {
    return gulp.src('src/img/**/*') // Берем все изображения из src
        .pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('includer', function () {
    gulp.src('src/components/blocks/*.html')
        .pipe(includer({
            prefix: '@@',
            basepath: '@file'
        }).on('error', function (error) {
            console.log(error);
        }))
        .pipe(gulp.dest('src/components'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function () {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'src/css/*'
    ]).pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task('default', ['watch']);