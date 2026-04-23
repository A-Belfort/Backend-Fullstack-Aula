const Entity = require('../models/Entity');

exports.listEntity = async (req, res) => {
    const ents = await Entity.find();
    res.json();
}

exports.oneEntity = async (req, res) => {
    const ent = await Entity.findById(req.params.id);
    res.json(ent);
}

exports.createEntity = async (req, res) => {
    const ent = await Entity.create(req.body);
    console.log('entidade criada')
    res.status(201).json(ent);
}

exports.editEntity = async (req, res) => {
    const ent = await Entity.findByIdAndUpdate(req.params.id, req.body);
    res.json(ent);
}

exports.deleteEntity = async (req, res) => {
    const ent = await Entity.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'foi deletado'});
}