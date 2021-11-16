//requerimiento de esquema y modelo
const { Schema, model } = require('mongoose')

//Model Schema
const producto_object = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        unique: true,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    existencia: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    }
})

//exportacion de modelo
module.exports = model ('productos', producto_object)