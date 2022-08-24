'use strict';
// indexRouter 
// GET : /api/auth 
const express = require( 'express' );
const User = require('../models/User.js');
module.exports = (passport) => {
    // 파라미터로 넣어주면 require선언 안 해줘도돼!
    // 어차피 app.js에 되어있어! 
    const router = express.Router();

    // 1. 회원가입 
    router.post('/register', async(req,res) => {
        let { email, password, userName, phoneNum, address, bank, accountNum} = req.body;

        let newUser = new User({
            email : email,
            password : password,
            userName : userName,
            phoneNum : phoneNum,
            address : address,
            bank : bank,
            accountNum : accountNum,
        })
        let saveUser = await newUser.save();
        // 저장하기 전 pre함수에서 bcrypt모듈 사용해서 비번 암호화.
        console.log(saveUser);
    }) 

    // 2. 로그인( :POST /api/auth/local-process)
    // passport실행 순서 : 로그인 요청이 오면 authenticate를 실행한다.
    // -1) authenticate에 전달된 callback함수를 실행 
    router.post('/local-process', passport.authenticate('local', {
        successRedirect : '/index', // 홈으로
        failureRedirect : '/login/index', // 다시 로그인 페이지로
    }))
    return router;
}