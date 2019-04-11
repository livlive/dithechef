var mongoose    = require("mongoose");

var ingredientSchema = mongoose.Schema({
    name: String,
    measurement: String
});

module.exports = mongoose.model("Ingredient", ingredientSchema);