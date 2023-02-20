var express = require('express');
var router = express.Router();
const { bitAnd,bitOr,bitNot,bitXor } = require('mathjs');

let responser = {
    data : '',
    success : false
}

router.get('/and/:num1/:num2', (req, res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = bitAnd(num1,num2);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

    res.send(responser)
});

router.get('/or/:num1/:num2', (req, res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = bitOr(num1,num2);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

    res.send(responser)
});

router.get('/not/:num1', (req, res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = bitNot(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

    res.send(responser)
});

router.get('/xor/:num1/:num2', (req, res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = bitXor(num1,num2);
        console.log("hiii")
        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

    res.send(responser)
});

module.exports = router;