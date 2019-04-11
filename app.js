var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Recipe  = require("./models/recipe"),
    // Comment     = require("./models/comments"),
    Ingredient     = require("./models/ingredient"),
    seedDB      = require("./seeds");
    

// mongoose.connect("mongodb://localhost/recipeApp_v3"); //create yelpcamp db inside mongodb

mongoose.connect('mongodb://admin:admin1@ds113179.mlab.com:13179/dianesrecipes', 
    function(err){
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    }
  );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

       
app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX ROUTE - show all recipes
app.get("/recipes", function(req, res) {
    // Get all recipes from DB
    Recipe.find({}, function(err, allRecipes){
        if (err) {
            console.log(err);
        } else {
             res.render("recipes/index", {recipes:allRecipes}); //data + name passing in
        }   
        });
    
});

//CREATE - add new recipes to database
app.post("/recipes", function (req, res){
    // get data from form and add to recipes array
    var name= req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newRecipe = {name: name, image: image, description: desc};
   //create a new recipe and save to db
   Recipe.create(newRecipe, function(err, newlyCreated){
      if (err) {
          console.log(err);
      } else {
           // redirect back to recipes page
          res.redirect("/recipes"); //
      }
   });
});

//NEW - show form to create new recipe 
app.get("/recipes/new", function(req, res){
   res.render("recipes/new");
});

//SHOW - shows more info about recipe selected - to be declared after NEW to not overwrite
app.get("/recipes/:id", function(req, res){
    //find the recipe with the provided ID
    Recipe.findById(req.params.id).populate("ingredients").exec(function(err, foundRecipe){
       if (err) {
           console.log(err);
       } else {
            //render show template with that recipe
           res.render("recipes/show", {recipe: foundRecipe});
       }
    });
});

// ============================
// INGREDIENTS ROUTES
// ============================

app.get("/recipes/:id/ingredients/new", function(req, res){
    //find recipe by id
    Recipe.findById(req.params.id, function(err, recipe){
       if(err){
            console.log(err);
       } else {
            res.render("ingredients/new", {recipe: recipe});
       } 
    });
});

app.post("/recipes/:id/ingredients", function(req, res){
   // look up recipe using ID
    Recipe.findById(req.params.id, function(err, recipe){
        if(err){
            console.log(err);
            res.redirect("/recipes");
        } else {
            Ingredient.create(req.body.ingredient, function(err, ingredient){
        if(err){
            console.log(err);          
            } else {
                    recipe.ingredients.push(ingredient);
                    recipe.save();
                    res.redirect("/recipes/" + recipe._id);
                }
            });
        }
    });
});


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("YelpCamp server has started!");

// my workaround
app.listen(3000, function(){
    console.log("Mom's Recipes server has started!");
});