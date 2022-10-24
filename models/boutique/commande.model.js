const mongoose = require('mongoose')
const { Schema } = mongoose

const CommandeSchema = new Schema(
    {
        date_commande: { type: Date, default: null },
        moyen_paiement: { type: String, default: '' },
        statut: { type: String, default: '' },
        produits: [Schema.Types.ObjectId],
        user: Schema.Types.ObjectId,
    },
    { timestamps: true }
)

let Commande = mongoose.model('Commande', CommandeSchema)

module.exports = Commande
