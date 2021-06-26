const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Already Present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("Envalid Email");
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        // minlength: 12,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    }

});

// create new Collection 
const Student = new mongoose.model("Student", studentSchema)
module.exports = Student;