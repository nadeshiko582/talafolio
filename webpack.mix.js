mix.js('resources/js/app.js', 'public/js').vue() //ここ
.vue()
.postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);