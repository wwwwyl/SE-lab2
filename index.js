window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    //  在此为 top-right 元素设置监听器 fin
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });

    document.onkeydown = function (e) {
        var e = e || window.event;
        // console.log(e.key);
        if (e.key == "Enter") {
            search();
        }
    }
}

function search() {
    // 搜索触发后的行为 fin1:find input
    if(document.getElementById('search-input').childNodes[1].value){
        alert("\n你正在搜索："+ document.getElementById('search-input').childNodes[1].value)
        //window.location.href = "http://www.baidu.com/s?wd=" + document.getElementById('search-input').childNodes[1].value;
    }else{
        alert("\n请输入搜索内容");
    }
    
    // console.log(document.getElementById('search-input').childNodes[1].value);
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // 修改页面显示错误的 bug，另外注意图片路径是否正确 fin
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + username.split('<')[0] + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}