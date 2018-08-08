define(function () {
    var text = document.querySelector('.text');
        var html = text.innerHTML;
        var cont = Handlebars.compile(html);
        var control = document.querySelectorAll('.form-control');
        var local = window.localStorage;
        var data = {
            users: []
        }
        var arr = [];
        if (local.getItem('key')){
            arr=JSON.parse(local.getItem('key')) 
            data.users = arr;
            content.innerHTML = cont(data)       
        }
        
        sub.onclick = function () { // 提交数据显示到下文
            var user = control[0].value;
            var num = control[1].value;
            var grade = control[2].value;
            data.users.push({
                user: user,
                num:num,
                grade:grade
            })
            local.setItem('key', JSON.stringify(data.users));  
            content.innerHTML = cont(data)                               
        }    
});