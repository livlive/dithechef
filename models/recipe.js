var mongoose    = require("mongoose");

// SCHEMA SETUP
var recipeSchema = new mongoose.Schema ({
    name: String,
    image: String,
    description: [ String ],
    ingredients: [
        {
            name: String,
            measurement: String
        }
    ]
    // comments: [ //embedding a reference to the comments
    //     {
    //         type: mongoose.Schema.Types.ObjectId, //
    //         ref: "Comment" // name of the model
    //     }
    // ]
    },
    { strict: false }
    );

module.exports = mongoose.model("Recipe", recipeSchema); //creates model with above schema and has methods such as .find etc.