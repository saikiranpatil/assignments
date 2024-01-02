const { User } = require("../db");

const userMiddleware = async (req, res, next) => {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    if (!req.headers["user-id"]) {
        return res.status(404).send("Proper Headers are not provided");
    }

    const userHeader = JSON.parse(req.headers["user-id"]);

    if (!userHeader.username || !userHeader.password) {
        return res.status(404).send("Username or Password not provided in Headers");
    }

    const user = await User.findOne({
        username: userHeader.username,
        password: userHeader.password
    });

    if (!user) {
        return res.status(404).send("User not found with given Username and Password");
    }

    req.user = user;
    console.log(user);
    return next();
}

module.exports = userMiddleware;