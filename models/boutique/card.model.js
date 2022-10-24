const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
  user: Schema.Types.ObjectId,
  produits: [{product: Schema.Types.ObjectId, quantity: { type: Number, default: 1 }}],
},{timestamps: true});

let Card = mongoose.model('Card',CardSchema);

module.exports = Card;
