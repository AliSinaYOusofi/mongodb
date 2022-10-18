const mongose = require("mongoose");
// getting the userSchema
const UserSchema = require("./UserSchema");

mongose.connect("mongodb://localhost/users");

async function saveNewUsers() {
    const newUserWelcom = await UserSchema.create({
        name: "Ali Sina",
        age: 22,
        Dob: new Date(),
    });

    console.log(newUserWelcom);
}

saveNewUsers()