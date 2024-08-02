const express = require('express');
const router = express.Router();



router.get('/favorite',(req,res)=>{
    res.render('./pages/index.ejs',{pageTitle:'Recipur Favorite',content:'favorite.ejs'});
})

module.exports= router;