const mongoose = require('mongoose');

const paginaSchema =  new mongoose.Schema(
    {
        titulo: {type: String },
        descricao: {type: String},
        caderno_id: {type:mongoose.Schema.Types.ObjectId,
            ref: "Caderno", required: true}
    }
);

module.exports = mongoose.model('Pagina', paginaSchema);
