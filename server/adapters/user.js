const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
 
  nombre: {
    type: String,
    required: true,  
  },


  correo: {
    type: String,
    required: true,  
    unique: true,   
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'],  
  },

  contraseña: {
    type: String,
    required: true, 
  },


  favoritos: [{
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'producto',
  }],

  compras: [{
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'pedido',
    unique: true, 
  }],

}, { timestamps: true }); 

module.exports = mongoose.model("User", UserSchema);