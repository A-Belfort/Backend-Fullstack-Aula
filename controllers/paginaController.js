const Pagina = require('../models/Pagina');

exports.listPagina = async (req, res) => {
    const ents = await Pagina.find();
    res.json();
}

exports.onePagina = async (req, res) => {
    const ent = await Pagina.findById(req.params.id);
    res.json(ent);
}

exports.createPagina = async (req, res) => {
    const ent = await Pagina.create(req.body);
    console.log('entidade criada')
    res.status(201).json(ent);
}

exports.editPagina = async (req, res) => {
    const ent = await Pagina.findByIdAndUpdate(req.params.id, req.body);
    res.json(ent);
}

exports.deletePagina = async (req, res) => {
    const ent = await Pagina.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'foi deletado'});
}