const mongoose = require("mongoose");

const PrisonerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    pesel: Number,
    reason: String,
    explanation: String,
    is_chosen: Boolean
});

const Prisoner = mongoose.model("Prisoner", PrisonerSchema);

module.exports = Prisoner;