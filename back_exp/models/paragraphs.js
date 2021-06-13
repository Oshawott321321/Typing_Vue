import mongoose from 'mongoose'

const schema = mongoose.Schema;

const Paragraph_Schema = new schema({
    str : {
        type:String,
        required:true,
    },
});

const Paragraph = mongoose.model('Paragraph',Paragraph_Schema)
export { Paragraph }