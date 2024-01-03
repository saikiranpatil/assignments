const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET);

        return next();
    }catch(error){
        res.status(400).json(error);
    }
}

module.exports = adminMiddleware;