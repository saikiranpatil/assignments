const { Admin } = require("../db");

// Middleware for handling auth
const adminMiddleware = async (req, res, next) => {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    if (!req.headers["user-id"]) {
        return res.status(404).send("Proper Headers are not provided");
    }

    const userHeader = JSON.parse(req.headers["user-id"]);
    if (!userHeader.username || !userHeader.password) {
        return res.status(404).send("Username or Password not provided in Headers");
    }

    const user = await Admin.findOne({
        username: userHeader.username,
        password: userHeader.password
    });

    if (!user) {
        return res.status(404).send("User not found with given Username and Password");
    }

    res.user = user;
    return next();
}

module.exports = adminMiddleware;