// model은 스키마를 통해 만들어지는 instance
// Schema는 그냥 모델의 형태.
// schema type and property 알고있어야함. 
'use strict';
const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' ); // 비밀번호 암호화

// const validateEmail = function(email) { // email 유효성 검사 함수. 
//     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };
const userSchema = new mongoose.Schema(
    {
        email : {
            type : String, 
            unique : true,
            required : [true, 'please enter an email'],
            lowercase: true, // 대문자로 입력해도 db에 소문자로 저장시켜줌.
            trim : true, // 처음 끝 공백 제거,
            // validate: [validateEmail, 'Please fill a valid email address'],
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }, 
        password : {
            type : String,
            required : true,
            minlength : 7, //8글자 이상으로 입력해야함
        },
        userName : {
            type : String,
            maxlength : 15, 
            required : true,
        },
        phoneNum : {
            type : String,
            required : [true, 'please enter an phoneNumber']
        },
        address : {
            type : String,
            required : true,
        },
        bank : {
            type : String,
            required : true,
        },
        accountNum : {
            type : String, 
            required : true,
        }
    },
    {
        timestamps : true,
    }
)
// bcrypt로 암호화
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10); // Recommended in bcryptjs doc
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);