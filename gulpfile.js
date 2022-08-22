const { src, dest } = require('gulp');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

function imagenes(done) {
	const options = {
		optimizationLevel: 3
	}
	src('src/img/**/*.{png,jpg}')
		.pipe(cache(imagemin(options)))
		.pipe(dest('assets/img'));

	done();
}

exports.imagenes = imagenes;