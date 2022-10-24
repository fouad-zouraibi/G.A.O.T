const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate');


const ProduitSchema = new Schema({
  titre:  { type: String, default: "" },
  image:  { type: String, default: "" },
  description: { type: String, default: "" },
  price:  { type: Number, default: 0 },
  stock:  { type: Number, default: 0 },
  id_categorie:  Schema.Types.ObjectId ,
},{timestamps: true});


ProduitSchema.plugin(mongoosePaginate);
let Produit = mongoose.model('Produit',ProduitSchema);
module.exports = Produit;
