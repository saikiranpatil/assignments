const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Admin and User routes
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// mongodb+srv://admin:F9J68bxz0hQG6Vd0@cluster0.soc3plk.mongodb.net/?retryWrites=true&w=majority