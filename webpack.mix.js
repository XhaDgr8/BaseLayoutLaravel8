const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .extract()
    .sass('resources/css/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .purgeCss()
    .webpackConfig(require('./webpack.config'))
    .browserSync('http://127.0.0.1:8000')
    .disableNotifications();

if (mix.inProduction()) {
    mix.version();
}
