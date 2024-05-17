const mongoose = require("mongoose");

const PrisonerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("Prisoner", PrisonerSchema);