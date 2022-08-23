'use strict';
const p = document.querySelector('p');


function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = p.innerHTML;
    if (mailformat.test(email)) {
        alert('email 형식 맞습니다!');
        return true;
    } else {
        alert("입력하신 값은 이메일 형식이 아닙니다.");
        //focus 처리가 필요하면 이곳에! $("#email").focus();
        return false;
    }
}