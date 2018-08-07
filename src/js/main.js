require.config({
    baseUrl: './js/',
    paths: {
        'ajax': './app/ajax',
        'index': './app/index',
        'render': './common/render'
    }
})
require(['ajax', 'render'], function (ajax, render) {
    ajax('/api/index')
    console.log(render)
})