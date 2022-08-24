'use strict';
const express = require('express');
const db = require('./db.js');
const path = require( 'path' );
const session  =require('./src/auth/session.js');
const passport = require('./src/auth/passport/LocalStrategy.js');
const authRouter = require('./src/routes/authRouter.js');
const indexRouter = require('./src/routes/index/indexRouter.js');

const app = express();

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine','ejs');
db(); //db연결함수 실행! 
app.use(express.urlencoded({ extended : true })); //2중 객체 허용한다.
app.use(express.json()); 
app.use(express.static(path.join(__dirname, './src/public')));

session(app);
passport(app); // 라우터 앞에 위치해야함 무조건! 
// Router MiddleWare
app.use('/', indexRouter());
app.use('/api/auth', authRouter(passport(app)));

module.exports = app; //app객체를 내보내줌! 