'use strict';
const User = require('../../models/User.js');
const bcrypt = require('bcrypt');

module.exports = (app) => {
    // 로그인 모듈! => 여권을 내야 통과할 수 있다 라고 생각하자. 
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        new LocalStrategy(
            {
                usernameField : 'email',
                passwordField : 'password',
            },
            async(id, pw, done) => {
                console.log(`email >> ${id}`);
                console.log(`password >> ${pw}`);
                
                let user = await User.findOne({email : id});
                console.log(user);
                const { password } = user;
                console.log(id, pw, password);
                if(user){ //가입된 회원이면
                    // 해쉬값을 비교
                    const result = await bcrypt.compare(password, pw);
                    // 비밀번호 암호화 한 값이랑 비교.
                    console.log(`result >> ${result}`);
                    if(result){
                        console.log('로그인 성공!');
                        done(null, user); // 성공하면 done의 2번째 인수에 선언.
                    }else{
                        console.log('비번 일치 x');
                        done(null, false, {
                            message : '비밀번호가 일치하지 않습니다.',
                        })
                    }
                }else{
                    done(null, false, {
                        message : '가입되지 않은 회원입니다.'
                    })
                }
            }
        )
    )

    return passport;
}