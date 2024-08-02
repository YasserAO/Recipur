
const express = require('express');
const router = express.Router();



router.get('/browse',(req,res)=>{
    res.render('./pages/index.ejs',{pageTitle:'Recipur browse',content:'browse.ejs'});
})




module.exports= router;