'use strict';
module.exports = (app) => {
    const session = require('express-session');
    const FileStore = require('session-file-store')(session);
    // app.js에서 app이 선언이 돼 있음.
    app.use(session({
        // session을 활성화 시켜주는 middleware
        // option을 설정하는 단계이다. 
        secret : '$#!$!$!#',
        resave : false,
        saveUninitialized : false,
        store : new FileStore(), 
    }))

    return session;
}

// 위에서 함수 선언문을 만들어서 이름으로 module.exports를 해도되고,
// 함수 선언문을 만들어 그 함수 선언문을 통째로 module.exports해도된다.
// 결국 중요한건 선언문을 호출하고, require한 file에서 실행을 해야한다는거!