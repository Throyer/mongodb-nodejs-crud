const mongoose = require('mongoose');

const repository = mongoose.model('Usuario');

module.exports = {
    async index(req, res) {

        const { page = 1, size = 10 } = req.query;

        const options = { page: parseInt(page, 10) || 1, limit: parseInt(size, 10) || 10 };

        const usuarios = await repository.paginate({}, options);
        return res.json(usuarios);
    },

    async show(req, res) {
        const usuario = await repository.findById(req.params.id);
        return res.json(usuario);
    },

    async store(req, res) {
        const usuario = await repository.create(req.body);
        return res.json(usuario); 
    },

    async update(req, res) {
        const usuario = await repository.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(usuario); 
    },

    async destroy(req, res) {
        await repository.findByIdAndRemove(req.params.id);
        res.send();
    }
}