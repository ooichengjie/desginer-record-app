const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let designerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    membershipno: {
        type: Number
    }
},{
    collection: 'designers'
})

module.exports = mongoose.model('Designer',designerSchema)