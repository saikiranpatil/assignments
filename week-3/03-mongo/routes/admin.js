const zod = require("zod");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const userZodSchema = zod.object({
        username: zod.string().min(4, "Username should be atleast 4 chars"),
        password: zod.string().min(8, "Password be atleast of 8 chars")
    });

    try {
        const userdata = userZodSchema.parse({
            username: req.body.username,
            password: req.body.password
        });

        const user = await Admin.create(userdata);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const courseZodSchema = zod.object({
        title: zod.string().min(4),
        description: zod.string().min(4),
        price: zod.number(),
        imageLink: zod.string()
    });

    try {
        const courseData = courseZodSchema.parse({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink,
        });

        const course = await Course.create(courseData);

        res.status(200).json({
            message: "Course created sucessfully",
            courseId: course.id
        });
    } catch (error) {
        res.status(404).send(error);
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json(courses);
});

module.exports = router;