const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //reference the User schema/User collection
        ref: 'User'
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //Dropdown options- can be anything
        ref: 'Ticket'
    },
    text: {
        type: String,
        required: [true, 'Please add some text.']
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    staffId: {
        type: String,
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('Note', noteSchema)