const mongose = require("mongoose");
// getting the userSchema
const UserSchema = require("./UserSchema");

mongose.connect("mongodb://localhost/users");

async function saveNewUsers() {
    try {
        const newUserWelcom = await UserSchema.find().byName();
        //
        console.log(newUserWelcom);
    } catch( error) {
        console.log(error.message);
    }
}

saveNewUsers()