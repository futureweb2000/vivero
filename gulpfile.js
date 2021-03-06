var gulp = require('gulp');
var webServer = require('gulp-webserver');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');


//ESTE OBJETO DE RUTAS ES PARA AUTOMATIZAR LAS RUTAS
var config = {
	styles: {
		main: './src/styles/app.styl',
		watch: './src/styles/**/*.styl',
		output: './build/css'
	},
	html:{
		watch: './src/*.html'
	},

	js:{
		watch: './build/**/*.js'
	}
};



// CREAR TAREA GULP, ESTA ES LA DEL SERVER
gulp.task('server', function(){

	gulp.src('./build')
		.pipe(webServer({
			host: '0.0.0.0',
			port: '8080',
			livereload: true
		}));
});


gulp.task('build:css', function(){
	gulp.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css': true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output));
});

gulp.task('watch', function(){

	gulp.watch(config.styles.watch, ['build:css']);
	gulp.watch(config.html.watch,['build']);
	gulp.watch(config.js.watch,['build']);
})

gulp.task('build', ['build:css']);

gulp.task('default', ['server','watch', 'build']);












