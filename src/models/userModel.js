import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
const schema = mongoose.Schema 

const userSchema = new schema({
    username: {
        type: String,
        required: true
    },

   email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },
    
    phoneNumber: {
        type: String,
        required: true
    },

});


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const userModel = mongoose.model('User', userSchema);
