const mongoose = require('mongoose');

const cadernoSchema =  new mongoose.Schema(
    {
        titulo: {type: String },
        descricao: {type: String}
    }
);

module.exports = mongoose.model('Caderno', cadernoSchema);
