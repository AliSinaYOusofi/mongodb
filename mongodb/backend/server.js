const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb");

async function run() {
    const user = await User.create({
        name: "Ali Sina",
        age: 23,
        hobbies: ["Gym", "Gym", "gyM", "gYm"],
        address: {
            street: "Golayee",
            city: "Kabul"
        }
    })
    console.log(user);
}

run();