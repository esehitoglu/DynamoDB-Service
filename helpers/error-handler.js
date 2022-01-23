module.exports = errorHandler;

function errorHandler(err,req,res,next){
    if(typeof (err) === 'string'){
        // custom application error
    }
    if(err.name === 'UnauthorizedError'){
        // jwt authentication error
        return res.status(401).json({message:'Token mevcut değil'})
    }

    // default to 500 server eroor
    return res.status(500).json({message: err.message})
}