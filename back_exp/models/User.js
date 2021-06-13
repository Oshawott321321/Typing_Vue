import mongoose from 'mongoose'

const schema = mongoose.Schema;

const UserSchema = new schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    error_rate: {
        type: Number,
        default: 0,
    },
    typing_speed: {
        type: Number,
        default: 0,
    },
    register_date:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User',UserSchema)
export { User }