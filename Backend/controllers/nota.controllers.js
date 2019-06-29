const Nota = require('../models/nota');
const notaCtrl = {};

notaCtrl.getNotas = async (req, res) => {
    const notas = await Nota.find();
    res.json(notas)
}

notaCtrl.createNota = async (req, res) =>{
    const nota = new Nota({
        nombre_nota: req.body.nombre_nota,
        descripcion: req.body.descripcion,
    });
    await nota.save();
    res.json(nota);
}

notaCtrl.getNota = async (req, res) =>{
    const nota = await Nota.findById(req.params.id);
    res.json(nota)
}

notaCtrl.editNota = async (req, res) => {
    const { id } = req.params;
    const nota = {
        nombre_nota: req.body.nombre_nota,
        descripcion: req.body.descripcion, 
    }

    await Nota.findByIdAndUpdate(id, {$set: nota}, {new:true});
    res.json(nota)
}

notaCtrl.deleteNota = async (req, res) => {
    await Nota.findByIdAndRemove(req.params.id);
    res.json('Eliminada')
};

module.exports = notaCtrl;