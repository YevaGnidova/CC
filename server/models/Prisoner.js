const mongoose = require("mongoose");

const PrisonerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    pesel: Number,
    reason: String
});

const Prisoner = mongoose.model("Prisoner", PrisonerSchema);

module.exports = Prisoner;