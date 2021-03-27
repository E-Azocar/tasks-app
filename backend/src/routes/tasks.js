const router = require("express").Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;

        const newTask = new Task({
            title,
            content,
        });

        await newTask.save();
        console.log(newTask);
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content } = req.body
        console.log(req.body)
        const response = await Task.findByIdAndUpdate(id, {
            title,
            content
        });
        console.log(response)

        res.json({ msg: "Task Edited" });
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);

        res.json({ msg: "Task Deleted" });
    } catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
});

module.exports = router;
