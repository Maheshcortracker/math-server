//const { response } = require('express');
const { sqrt,pow,abs,ceil,cube,floor,fix,round,gcd,lcm,log10,det } = require('mathjs')
var express = require('express');
var router = express.Router();

let responser = {
    data : '',
    success: false
}

router.get('/add/:num1/:num2', (req, res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let sum = num1 + num2;
        
        responser.data = {sum};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.success = false;
    }

    res.send(responser)
});

router.get('/subtract/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let sub = num1 - num2;

        responser.data = {sub};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/multiply/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let mul = num1 * num2;

        responser.data = {mul};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/divide/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let div = num1 / num2;

        responser.data = {div};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/subtract/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let sub = num1 + num2;

        responser.data = {sub};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/squaroot/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let squaroot = sqrt(num1);

        responser.data = {squaroot};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/power/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = pow(num1,num2);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/absolute/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = abs(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/ceil/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = ceil(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/cube/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = cube(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/floor/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = floor(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/fix/:num1/:num2', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = fix(num1,num2);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/round/:num1', (req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = round(num1);

        responser.data = {result};
        responser.success = true;
    }
    catch(error){
        responser.data = errpr;
        responser.success = false;
    }
    res.send(responser)
})

router.get('/gcd/:num1/:num2',(req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = gcd(num1,num2);

        responser.data = {result};
        responser.error = true;
    }

    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser)
})

router.get('/lcm/:num1/:num2',(req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let num2 = Number(req.params.num2);
        let result = lcm(num1,num2);

        responser.data = {result};
        responser.error = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser);
})

router.get('/log10/:num1',(req,res)=>{
    try{
        let num1 = Number(req.params.num1);
        let result = log10(num1);

        responser.data = {result};
        responser.error = true;
    }
    catch(error){
        responser.data = error;
        responser.error = false;
    }
    res.send(responser);
})


module.exports = router;