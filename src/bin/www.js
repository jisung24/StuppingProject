'use strict';
const app = require('../../app.js');
const env = require('dotenv').config({ path : './src/env/variables.env' });
const { PORT } = env.parsed;

async function serverStart(){
    try{
        const server = await app.listen(PORT);
        console.log(`${PORT}server is opened!`);    
    }catch(err){
        console.log(err);
    }
}
serverStart();
