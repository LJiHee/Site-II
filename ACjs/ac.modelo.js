var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var acSchema = new Schema({
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    ContaUbisoft: { type: Number, required: true },
    Jogo: { type: String, required: true },
})

module.exports = mongoose.model('AC', acSchema, 'ac')