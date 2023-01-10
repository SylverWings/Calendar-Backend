const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{

    try {
        const {authorization} = req.headers;

        if(!authorization){
            return res.status(401).json({
                success: false,
                message: "Token invalid"
            })
        }

        const token = authorization.split(' ')[1];
        let decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user_id = decoded.id;
        req.user_name = decoded.name;
        
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Token verification fails",
            error: error?.message || error
        })        
    }
};

module.exports = verifyToken;