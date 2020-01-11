const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');

let publicPath = '/';

if (mix.inProduction()) {
    publicPath = '/portal/public/';   
}

mix.webpackConfig({
   output: {
       publicPath: publicPath,
       chunkFilename: 'app/[name].[chunkhash].js',
       filename: '[name].js',
   },
   resolve:{
       extensions: ['.js', '.vue', '.woff2', '.woff', '.ttf', '.png'],
       alias: {
           'root': path.join(__dirname, ''),
           '_components': path.join(__dirname, 'resources/js/components'),
           '_app': path.join(__dirname, 'resources/js/app'),
           '_public': path.join(__dirname, 'public'),
           'template': path.join(__dirname, 'public/template'),
           '/fonts': path.join(__dirname, 'public/fonts'),
           '/images': path.join(__dirname, 'public/images'),
       },
   },
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
    console.log("============================");
    console.log("=== WE ARE IN PRODUCTION ===");
    console.log("============================");
    console.log('');

    mix.version();
}