import mongoose from 'mongoose'

const schema = mongoose.Schema;

const Single_line_Schema = new schema({
    str : {
        type:String,
        required:true,
    },
});

const Single_Line = mongoose.model('Single_Line',Single_line_Schema)
export { Single_Line }