const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorieProduitSchema = new Schema({
  titre:  { type: String, default: "" },
  id_parent:  { type: String, default: "" },
  // id_parent:  Schema.Types.ObjectId,
},{timestamps: true});

let CategorieProduit = mongoose.model('CategorieProduit',CategorieProduitSchema);

module.exports = CategorieProduit;
