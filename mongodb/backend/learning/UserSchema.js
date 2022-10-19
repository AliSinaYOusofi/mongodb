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
        // max: 41, we get errors, no time to increment it every time
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
// adding static methods for the whole model
userSchema.statics.findByName = function(name) {
    return this.find({name: new RegExp(name, 'i')})
}

// or adding methods to the query
userSchema.query.byName = function (name) {
    return this.where({name: new RegExp(name, 'i')});
}

// adding virtual methods to the schema using
// Schema.virtual.method = function(prop) { return this.anything}
// in virtual data is not stored in the main document it
// lives inside our code only

// way to create a virtual method
userSchema.virtual("nameAndAge").get( function () {
    return `${this.name} is ${this.age} years old as of ${Date.now()}`
})

// making a middleware to our mongodb
// run this pre/before saving the dato in the database
userSchema.pre("save", function (next) {
    this.Dob = Date.now();
    this.age = this.age + 2;
    next();
});

// doc can also be used as a parameter
// in the callback function of Schem.pre(option, function(doc, next))
userSchema.post("deleteOne", function(doc, next) {
    doc.showData()
    const currentUserToBeDeleted = String(this.name + this.age + this.Dob)
    console.log("being delted is: " + currentUserToBeDeleted)
})
module.exports = mongose.model("users", userSchema);