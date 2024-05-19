const mongoose = require("mongoose");

const PrisonerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Prisoner = mongoose.model("Prisoner", PrisonerSchema);

module.exports = Prisoner;