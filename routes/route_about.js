const express = require('express');
const router = express.Router();



router.get('/about',(req,res)=>{
    res.render('./pages/index.ejs',{pageTitle:'Recipur about',content:'about.ejs'});
})



module.exports= router;