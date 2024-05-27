const express = require("express");
const router = express.Router();
const Prisoner = require("../models/Prisoner");

router.get("/", (req, res) => {
    Prisoner.find({}).then((users) => res.json(users)).catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/", async (req, res) => {
    try {
        const newUser = new Prisoner(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(`post error: ${err.message}`);
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    const userID = req.params.id;
    try {
        const deleteUser = await Prisoner.findByIdAndDelete(userID);
        if (!deleteUser) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User successfully deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const prisoner = req.body;
        const update = req.body?.is_chosen ? { $set: prisoner } : { $unset: prisoner };
        await Prisoner.updateOne({ _id: req.params.id }, update);

        res.json({ message: "Prisoner updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const prisoner = req.body;
        await Prisoner.findOneAndReplace({ _id: req.params.id }, prisoner);

        res.json({ message: "Prisoner replaced successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;

/*
const express = require("express");
const router = express.Router();
const Prisoner = require("../models/Prisoner");

router.get("/", (req, res) => {
    Prisoner.find({}).then((users)=> {res.json(users)}).catch((err) => res.status(500).json({message: err.message}))
});

router.post("/", async (req, res) => {
    try {
        const newUser = new Prisoner(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(`post error: ${err.message}`);
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    const userID = req.params.id;
    try {
        const deleteUser = await Prisoner.findByIdAndDelete(userID);
        if (!deleteUser)
            return res.status(404).json({message: "User not found"});
        res.json({message:"User successfully deleted"})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const prisoner = req.body;
        if (req.body?.is_chosen) await Prisoner.updateOne({ _id: req.params.id }, { $set: prisoner });
        else await Prisoner.updateOne({ _id: req.params.id }, { $unset: prisoner });

        res.json({ message: "new object" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const prisoner = req.body;
        await Prisoner.findOneAndReplace({ _id: req.params.id }, prisoner);

        res.json({ message: "new object" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
*/