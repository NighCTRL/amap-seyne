const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization    
    const token = authHeader && authHeader.split(' ')[1];
    console.log(req.headers)
    jwt.verify(token,process.env.JWT_ACCESS_SECRET,(err,user)=>{
	if(err){
	    console.log("erreur jwt")
	    console.log(err)
	    return res.status(403).json("Token not valid")
	};
	req.user = user;
	next()
    })
}

module.exports = verifyToken
