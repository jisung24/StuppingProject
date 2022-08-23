'use strict';
// indexRouter 
// GET : /api/auth 
const express = require( 'express' );
const User = require('../models/User.js');
module.exports = () => {
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
    return router;
}