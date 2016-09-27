var pkg = require('./../package.json');

var src = './src';
var dest = './dist';

var config = {
    port: 3000,
    styles: {
        src: src + '/index.less',
        glob: src + '/styles/**/*.less',
        autoprefixTarget: {
            browsers: [
                'last 2 versions'
            ]
        },
        dest: dest,
        name: pkg.name + '.css'
    },
    html: {
        src: src + '/index.html',
        dest: dest,
        name: 'index.html'
    },
    assets: {
        src: src + '/assets/**/*.*',
        dest: dest + '/assets/'
    }
};

module.exports = config;