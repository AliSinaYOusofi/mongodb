const mongose = require("mongoose");

// and now adding custom validator using the validator object
// adding new methods to our created schema
const userSchema = new mongose.Schema({
    name: { type: String, 
        required: true, 
        minLength: 10, 
        maxLength: 20, 
        lowercase: false, 
        uppercase: true
    },
    age: { 
        type: Number, 
        required: true, 
        min: 10,
        max: 21,
        validate: {
            validator: value => value % 2 !== 0,
            message: props => `${props.value} is not an even number`
        }
    },
    Dob: { 
        type: Date, 
        default: () => Date.now(), 
        immutable: true
    }
});

// userSchema.method.showData = () => {} is woring
// it does not accept arrow functions
// adding custom methods after defining our shcema
userSchema.methods.showData = function() {
    console.log(`Name: ${this.name} \n Age: ${this.age} \n DOB: ${this.Dob}`);
}
module.exports = mongose.model("users", userSchema);