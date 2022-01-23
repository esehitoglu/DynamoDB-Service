const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');


AWS.config.update({
    region: "",
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: "https://dynamodb. .amazonaws.com"
})

let docClient = new AWS.DynamoDB.DocumentClient()
table = "category"

exports.add = async(params)=>{
    const item = {
        TableName:table,
        Item:{
            "id":uuidv4(),
            "categoryName":params.categoryName
        }
    }
    try{
        await docClient.put(params).promise()
        return{
            status:true,
            message:"Kategori eklendi"
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
exports.single = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            "id": params.id,
        }
    };
    
    try{
        await docClient.get(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
exports.fetchAll = async(params)=>{
    var items = {
        TableName: table
    };
    try{
        const data = await docClient.scan(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
exports.update = async(params)=>{
    var params = {
        TableName:table,
        Key:{
            "id": params.id,
        },
        UpdateExpression: "set categoryName = :categoryName",
        ExpressionAttributeValues:{
            ":categoryName":params.categoryName,
        },
        ReturnValues:"UPDATED_NEW"
    }
    try{
        await docClient.update(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
exports.delete = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            "id": params.id,
        }
        
    };
    try{
        await docClient.delete(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
