const mongose = require("mongoose");

const userSchema = new mongose.Schema({
    name: {type: String, required: true},
    age: { type: Number, required: true},
    Dob: { type: Date, required: true}
});

module.exports = mongose.model("users", userSchema);