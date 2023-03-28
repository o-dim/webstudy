
var id = document.getElementById('id');
id.onkeyup = function(){
    var regid = /.{4,}/
    if(regid.test(id.value)){
        document.getElementById('invalidmeg').innerText = '정상적인 아이디입니다.';
        document.getElementById('invalidmeg').style.visibility = 'visible';
        document.getElementById('invalidmeg').style.color = 'blue';
        document.getElementById('invalidmeg').style.fontSize = '14px';
    } else {
        document.getElementById('invalidmeg').innerText = '아이디는 4자 이상입니다';
        document.getElementById('invalidmeg').style.visibility = 'visible';
        document.getElementById('invalidmeg').style.color = 'red';
        document.getElementById('invalidmeg').style.fontSize = '14px';
    }
}

var pw = document.getElementById('pw');
var login_btn = document.getElementById('login_btn');
login_btn.addEventListener('click', (event) => {
    var idlength = id.value.length;
    var pwlength = pw.value.length;
    if(idlength < 4){
        alert('아이디를 확인하세요.');
        event.preventDefault();
    } else if(pwlength == 0){
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
    }
})
