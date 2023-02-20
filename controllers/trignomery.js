var express = require('express');
const { cos,sin,tan,cot,sec,csc,acos,asin,atan,acot,asec,acsc } = require('mathjs')
var router = express.Router();

let responser = {
    data : '',
    success : false
}

router.get('/cos/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = cos(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/sin/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = sin(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/tan/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = tan(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/cot/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = cot(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/sec/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = sec(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/csc/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = csc(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/asin/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = asin(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/acos/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = acos(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/atan/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = atan(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/acot/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = acot(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/asec/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = asec(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/acsc/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = acsc(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

module.exports = router;