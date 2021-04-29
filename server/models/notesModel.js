const mongoose =require('mongoose')
const noteSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        note: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Note = mongoose.model('Notes', noteSchema)
module.exports=Note