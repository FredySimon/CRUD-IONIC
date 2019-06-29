const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotaSchema = new Schema ({
    nombre_nota: {type: String, required: true},
    descripcion: {type: String, required: true},
});

module.exports = mongoose.model('Nota', NotaSchema);