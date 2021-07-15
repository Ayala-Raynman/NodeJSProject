const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pets = new Schema(
    {
        name: {
            type: String
        },
        species: {
            type: String
        },

    },
    { collection: "pets" }
);
module.exports = mongoose.model("pets", pets);
