//每次调用$.post/$.ajax都会先调用ajaxPrefilter这个函数，在这个函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    options.url="http://ajax.frontend.itheima.net"+options.url
})