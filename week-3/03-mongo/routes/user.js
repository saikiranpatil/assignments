const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod");

const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const userZodSchema = zod.object({
        username: zod.string().min(4, "Username should be atleast 4 chars"),
        password: zod.string().min(8, "Password be atleast of 8 chars")
    });

    try {
        const userdata = userZodSchema.parse({
            username: req.body.username,
            password: req.body.password
        });

        const user = await User.create(userdata);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.status(200).json(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);

    if (!course) {
        res.status(404).send(`Course not found with id ${courseId}`);
    }

    try {
        course.purchasedCourses.push(req.user._id);
        await Course.findByIdAndUpdate(courseId, course);

        res.status(200).send("Course Enrolled Sucessfully");
    } catch (error) {
        console.log(error)
        res.status(400).send("Error while enrolling to the course");
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const courses = await Course.find({ purchasedCourses: { $in: [req.user.id] } });
    res.status(200).json({ courses });
});

module.exports = router