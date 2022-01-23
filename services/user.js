const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAXE4QWHK2VPQFMHEJ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
})

let docClient = new AWS.DynamoDB.DocumentClient()
var table = "user"

exports.register = async(params)=>{
    //console.log(params)
    const items = {
        TableName:table,
        Item:{
            email: params.email,
            password:params.password,
            color:params.color
        }
    };
    
    try{
        console.log("geldi")
        await docClient.put(items).promise()
        return{
            status:true,
            message:"üyeniz eklendi"
        }
    }catch(err){
        console.log("geldi2")
        return{
            status:false,
            message:err
        }
    }
}

exports.login = async(params)=>{
    const items = {
        TableName:table,
        Key:{
            email: params.email,
            password:params.password
        }
    };
    
    try{
        console.log(items)
        const data = await docClient.get(items).promise()
        const user = data.Item
        const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"
        const token = jwt.sign(
            user,
            secret,
            { expiresIn:'7d' }
        )
        return({
            status:true,
            jwt:{
                token : token,
                expiresIn:'7d'
            },
            user
        })
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}