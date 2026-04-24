const Caderno = require('../models/Caderno');

exports.listCaderno = async (req, res) => {
    const ents = await Caderno.find();
    res.json();
}

exports.oneCaderno = async (req, res) => {
    const ent = await Caderno.findById(req.params.id);
    res.json(ent);
}

exports.createCaderno = async (req, res) => {
    const ent = await Caderno.create(req.body);
    console.log('entidade criada')
    res.status(201).json(ent);
}

exports.editCaderno = async (req, res) => {
    const ent = await Caderno.findByIdAndUpdate(req.params.id, req.body);
    res.json(ent);
}

exports.deleteCaderno = async (req, res) => {
    const ent = await Caderno.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'foi deletado'});
}