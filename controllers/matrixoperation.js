const express = require('express');
var router = express.Router();
const { det,diag,sum,dot,fft,multiply } = require('mathjs');

let responser  = {
    data : '',
    success : false
};

router.post('/det', async (req, res, next)=>{
    try{
        let mat1 = req.body.mat1;
        let result = det(mat1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

res.send(responser);
})

router.post('/diag', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        //let mat2 = req.body.mat2;
        let result = diag(mat1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser);
})

router.post('/sum',(req,res)=>{
    try{
        let mat1 = req.body.mat1;
        let result = sum(mat1);
    
        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }
    res.send(responser);

})

router.post('/multiply',(req,res)=>{
    try{
        let mat1 = req.body.mat1;
        let mat2 = req.body.mat2;
        let result = multiply(mat1,mat2);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }
    res.send(responser);
})

router.post('/fft',(req,res)=>{
    try{
        let mat1 = req.body.mat1;
        let result = fft(mat1);
    
        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }
    res.send(responser);

})


module.exports = router;