const mongoose = require("mongoose");

const PrisonerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    image: String,
    term: Number,
    reason: String
});

const Prisoner = mongoose.model("Prisoner", PrisonerSchema);

module.exports = Prisoner;