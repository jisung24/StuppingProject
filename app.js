'use strict';
const express = require('express');
const db = require('./db.js');
const session  =require('./src/auth/session.js');
const authRouter = require('./src/routes/authRouter.js');
const indexRouter = require('./src/routes/index/indexRouter.js');

const app = express();

app.set('views','./src/views');
app.set('view engine','ejs');
db(); //db연결함수 실행! 
app.use(express.urlencoded({ extended : true })); //2중 객체 허용한다.
app.use(express.json()); 
app.use(express.static( './src/public' ));

// Router MiddleWare
app.use('/', indexRouter());
app.use('/api/auth', authRouter());

session(app);

module.exports = app; //app객체를 내보내줌! 