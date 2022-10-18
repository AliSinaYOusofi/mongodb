const mongose = require("mongoose");

// and now adding custom validator using the validator object
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

module.exports = mongose.model("users", userSchema);