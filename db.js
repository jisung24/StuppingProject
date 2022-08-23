'use strict';
//db를 연결하는 함수를 exports해줌.
const mongoose = require('mongoose');
const env = require('dotenv').config({ path : './src/env/variables.env' });
const { DB_URL } = env.parsed;

async function dbConnect(){
    try{
        const connect = await mongoose.connect(DB_URL,{
        useNewUrlParser : true,
        })
        console.log('db connected successfully!');
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect; //함수 선언을 넘겨주고 app.js에서 실행한다. 