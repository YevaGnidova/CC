const express = require("express");
const router = express.Router();
const Prisoner = require("../models/Prisoner");

router.get("/", async (req, res) => {
    try {
        const users = await Prisoner.find({});
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
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

module.exports = router;