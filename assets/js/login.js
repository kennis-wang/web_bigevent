$(function(){
    $('#link_login').on('click', function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_reg').on('click', function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    var layer =layui.layer
    form.verify({
    pwd: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
    repwd: function(value){
     var pwd= $('.reg-box [name=password]').val()
     if(pwd!==value){
         return '两次密码不一致'
//value为确认密码框值
     }
    }
})
$('#form_reg').on('submit', function(e){
    e.preventDefault()
    $.post('http://ajax.frontend.itheima.net/api/reguser',{
            username:$('#form_reg[name=username]').val(),
            password:$('#form_reg[name=password]').val(),
        },function(res){
            if(res.status!==0){
                return layer.msg(res.message)
            }
            layer.msg("注册成功")
            $('#link_login').click()
        

    })
   
    })
})
