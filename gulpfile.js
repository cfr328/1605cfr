var gulp = require('gulp');
var loader = require('gulp-load-plugins')();
var path = require('path');
var fs = require('fs');
gulp.task('server', function () {
    gulp.src('src')
        .pipe(loader.webserver({
            port:8888,
            open:true,
            middleware:function (req, res, next) {
                var pathname = require('url').parse(req.url).pathname;
                if (req.url === '/favicon.ico') {
                    return;
                }
                pathname = pathname === '/'? 'index.html': pathname;
                if (pathname === '/api/index') {
                    res.end(JSON.parse(data))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})