const mogoose = require('mongoose');
const paginate = require('mongoose-paginate')

const UsuarioSchema = new mogoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    documento: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

UsuarioSchema.plugin(paginate);

mogoose.model('Usuario', UsuarioSchema);