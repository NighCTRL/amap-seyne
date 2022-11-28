const jwt = require('jsonwebtoken');

const jwtSign = (user_id,user_email) => {
    const userInfo = {user_id,user_email};
    // create a short lived access (15min) token using email and jwt access secret
    const accessToken =  jwt.sign(userInfo,process.env.JWT_ACCESS_SECRET,{expiresIn:"15min"});
    const refreshToken =  jwt.sign(userInfo,process.env.JWT_REFRESH_SECRET,{expiresIn:"3days"});
    return({accessToken,refreshToken})
    
}

module.exports = jwtSign
