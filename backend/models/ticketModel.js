const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //reference the User schema/User collection
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product.'],
        //Dropdown options- can be anything
        enum: ['iPhone', 'MacBook Pro', 'iMac', 'iPad']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the issue.']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('Ticket', ticketSchema)