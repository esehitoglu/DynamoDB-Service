const AWS = require('aws-sdk')
const { status } = require('express/lib/response')
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
    region:"us-east-1",
    accessKeyId:"AKIAXE4QWHK27YRG3MBI",
    secretAccessKey: "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",
    endPoint:"https://dynamodb.us-east-1.amazonaws.com"
})

let docClient = new AWS.DynamoDB.DocumentClient()
table = "posts"
exports.add = (req,res)=>{
    var categoryName= req.body.categoryName

    var params = {
        TableName:table,
        Item:{
            "id":uuidv4(),
            "categoryName":categoryName
        }
    }
    docClient.put(params,function(err,data){
        if(err){
            console.log("unable to add item,Error JSON:",JSON.stringify(err,null,2))
            res.send({status:false,message:'sorun var'})
        }else{
            console.log("added item:",JSON.stringify(err,null,2))
            res.send({status:true,message:'eklendi'})
        }
    })
}

exports.update = (req,res)=>{
    //console.log(req.body.id)
    var params = {
        TableName:table,
        Key:{
            "id": req.body.id,
        },
        UpdateExpression: "set categoryName = :categoryName",
        ExpressionAttributeValues:{
            ":categoryName":req.body.categoryName,
        },
        ReturnValues:"UPDATED_NEW"
    }
    docClient.update(params,function(err,data){
        if(err){
            console.log("unable to add item,Error JSON:",JSON.stringify(err,null,2))
            res.send({status:false,message:'güncellenemedi'})
        }else{
            console.log("update item:",JSON.stringify(err,null,2))
            res.send({status:true,message:'güncellendi'})
        }
    })
  
}

exports.fetchAll = (req,res)=>{
    var params = {
        TableName: table,
        Select:"ALL_ATTRIBUTES"
    };
    
    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false,message:'tüm veriler gelmedi'})
        } else {
            console.log("all item:", JSON.stringify(data, null, 2));
            res.send({status:true,message:'tüm veriler geldi'})
        }
    });
}
 
exports.single = (req,res)=>{
    var params = {
        TableName:table,
        Key:{
            "id": req.params.id,
        }
    };
    
    console.log("Attempting a conditional delete...");
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:true,message:'veri alınamadı'})
        } else {
            console.log("succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true,message:'veri alındı'})
        }
    });
}

exports.delete = (req,res)=>{
    var params = {
        TableName:table,
        Key:{
            "id": req.params.id,
        }
        
    };
    
    console.log("Attempting a conditional delete...");
    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:true,message:'veri silinmedi'})
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true,message:'veri silindi'})
        }
    });
}