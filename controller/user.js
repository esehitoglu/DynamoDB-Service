const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const Joi = require('joi');
const userService  = require('../services/user') 

/*
exports.login = (req,res)=>{

    const schema = Joi.object({
        mail_control: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        password_control: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    const controlResult = schema.validate({
        mail_control : req.body.email,
        password_control : req.body.password
    })
    //console.log(controlResult)
    if(!controlResult.error){

        if(req.body.email === 'ensar@gmail.com' && req.body.password === 'ensar123' ){
        const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"
        const user = {
            id:1,
            name:'Ensar',
            surname:'Şehitoğlu',
            email:'ensar@gmail.com',
            role:1,
            user_type : 'admin'
        }

        const token = jwt.sign(
            user,
            secret,
            { expiresIn:'7d' }
        )
        res.send({
            status:true,
            jwt:{
                token : token,
                expiresIn:'7d'
            },
            user
        })
        }else{
            let response = {
                status : false
            }
            res.status(200).send(response)
        }
    }else{
        res.status(400).send('hatalı giriş')
    }
}
*/
exports.register = async(req,res)=>{
    const response =await userService.register(req.body)
    res.send(response)  
}

exports.login = async(req,res)=>{
    const response =await userService.login(req.body)
    res.send(response)  
}

