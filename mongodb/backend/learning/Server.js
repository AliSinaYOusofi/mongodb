const mongose = require("mongoose");
// getting the userSchema
const UserSchema = require("./UserSchema");

mongose.connect("mongodb://localhost/users");

async function saveNewUsers() {
    try {
        const newUserWelcom = await UserSchema.deleteOne({name: "Ali Sina Yousofi"})
        
        console.log(newUserWelcom);
       //
        console.log(newUserWelcom.nameAndAge);
    } catch( error) {
        console.log(error.message);
    }
}

saveNewUsers()