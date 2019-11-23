const { Schema, model} =require('mongoose')

const dataSchema = new Schema(
    {
        nombres: String,
        phone: String,
        email: String,
        asunto: String,
        mensaje: String
    },
)

module.exports = model('Data', dataSchema)