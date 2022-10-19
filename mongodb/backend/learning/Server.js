const mongose = require("mongoose");
// getting the userSchema
const UserSchema = require("./UserSchema");

mongose.connect("mongodb://localhost/users");

async function saveNewUsers() {
    try {
        const newUserWelcom = await UserSchema.findOne({name: "ALI SINA YOUSOFI"});
        newUserWelcom.showData();
        console.log(newUserWelcom);
    } catch( error) {
        console.log(error.message);
    }
}

saveNewUsers()