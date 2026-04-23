const mongoose = require('mongoose');

const entitySchema =  new mongoose.Schema(
    {
        titulo: {type: String },
        descricao: {type: String}
    }
);

module.exports = mongoose.model('Entity', entitySchema);
