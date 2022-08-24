'use strict';
// router부분은 sessio, passport middleware가 활성화 되고나서 실행됨.
const express = require('express');
module.exports = () => {
    const router = express.Router(); //router모듈 활성화! 
    
    // 1. indexPage 
    router.get('/index', async(req,res) => {
        res.render('./users/index.ejs');
    })

    // 2. 회원가입 페이지
    router.get('/register/index', async(req,res) => {
        res.render('./users/register.ejs');
    })

    // 3. 로그인 페이지
    router.get('/login/index', async(req,res) => {
        res.render('./users/login.ejs');
    })
    return router; // 이 함수를 호출하면 router가 됨.
}