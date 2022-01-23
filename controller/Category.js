const categoryService  = require('../services/category')

exports.add = async(req,res)=>{
    const response =await categoryService.add(req.body)
    res.send(response)
}

exports.update = async(req,res)=>{
    const response =await categoryService.update(req.body)
    res.send(response)  
}

exports.fetchAll = async(req,res)=>{
    const response =await categoryService.fetchAll()
    res.send(response)
}
 
exports.single = async(req,res)=>{
    const response =await categoryService.single(req.params)
    res.send(response)
}

exports.delete = async(req,res)=>{
    const response =await categoryService.delete(req.params)
    res.send(response)
}