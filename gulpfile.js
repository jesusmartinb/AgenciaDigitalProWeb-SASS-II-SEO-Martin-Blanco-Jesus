const { src, dest, series } = require('gulp');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function imagenes(done) {
	const options = {
		optimizationLevel: 3
	}
	src('src/img/**/*.{png,jpg}')
		.pipe(cache(imagemin(options)))
		.pipe(dest('assets/img'));

	done();
}

function versionWebp(done) {
	const options = {
		quality: 50
	};
	src('assets/img/**/*.{png,jpg}')
		.pipe(webp(options))
		.pipe(dest('assets/img'))

	done();
}

exports.imagenes = series(imagenes, versionWebp);
exports.versionWebp = versionWebp;