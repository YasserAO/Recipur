require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;








router.post('/search',(req,res)=>{
    
    
    const query = req.body.searchInputs;
    if(query!==''){
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(ress=>{
            hit = ress.data.hits;
            res.send(hit)
            
            
            
        
        }
            
            
        
    )
        
    }
    

    
    
    

})

module.exports=router;