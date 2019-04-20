var mongoose    = require("mongoose");
var Recipe  = require("./models/recipe");
var Ingredient = require("./models/ingredient");
//var Comment     = require("./models/comment")

// starter data/seed data
var data = [
    {
        id:1,
        name: "Lamb Cake",
        description: [
            "Preheat over to 350°F.",
            "Cream butter until light. Gradually add sugar, beating until light and fluffy.",
            "Beat in eggs, one at a time, blending until well after each addition.",
            "Sift together flour, baking powder, and salt.",
            "Add to batter slowly and mix until blended.",
            "Stir in grated lemon rind.",
            "Generously coat both sides of lamb mold with butter.",
            "Spoon batter in face side of mold, filling it level. Place generous spoonful of batter in center of back and some in ear tips.",
            "Place back of mold back on front. Set on baking sheet and bake in oven for 1 hour.",
            "Remove from oven, take off top to allow steam to escape. Allow to cool.",
            "Stand cake up and generously apply frosting and coconut shavings."
        ],
        ingredients: [
            {
                name: "butter",
                measurement: "1 cup"
            },
            {
                name: "sugar",
                measurement: "1 cup"
            },
            {
                name: "eggs",
                measurement: "4"
            },
            {
                name: "cake flour",
                measurement: "2 cups"
            },
            {
                name: "baking powder",
                measurement: "3/4 teaspoon"
            },
            {
                name: "salt",
                measurement: "1/4 teaspoon"
            },
            {
                name: "lemon",
                measurement: "1 rind, grated"
            },
            {
                name: "frosting",
                measurement: "16 ounces"
            },
            {
                name: "coconut",
                measurement: "1 cup"
            }
        ],
        meal: "dessert",
        foodType: "cake"
    },
    {
        id: 2,
        adobePage: 19,
        name: "Sun Dried Tomato Pesto",
        description: [
            "Put everything in food processor and pulse until mixture forms a coarse paste."
        ],
        ingredients: [      
            {
                name: "sun dried tomatoes",
                measurement: "2 cups"
            },
            {
                name: "parmesan",
                measurement: "1 cup grated"
            },
            {
                name: "olive oil",
                measurement: "1/4 cup"
            },
            {
                name: "basil",
                measurement: "1/4 cup"
            },            
            {
                name: "parsley",
                measurement: "1/4 cup"
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            }
        ],
        meal: "sauce",
        foodType: "tomato"
    },
    {
        id: 3,
        adobePage: 1,
        name: "Pâté",
        description: [
            "Saute mushrooms, liver, onions, garlic, paprika and 1/4 c butter.",
            "Add wine and tabasco to pan and cook 5 minutes. COOL. There will be quite a bit of liquid.",
            "In blender - liver mixture and 1/2 c softened butter.",
            "Chill overnight."
        ],    
        ingredients: [      
            {
                name: "butter",
                measurement: "1/4 cup"
            },
            {
                name: "mushrooms",
                measurement: "1/2 lb."
            },
            {
                name: "chicken liver",
                measurement: "1 lb."
            },
            {
                name: "garlic",
                measurement: "1 tsp."
            },            
            {
                name: "paprika",
                measurement: "1 tsp."
            },
            {
                name: "green onion",
                measurement: "1/3 cups"
            },
            {
                name: "white wine",
                measurement: "1/2 cup"
            },
            {
                name: "tabasco",
                measurement: "3 drops"
            },            
            {
                name: "butter",
                measurement: "1/2 c., softened"
            },
            {
                name: "salt",
                measurement: "pinch"
            }
        ],
        cook: "Karen",
        cuisine: "French",
        foodType: "chicken",
        meal: "appetizer",
        image: "xxx"
    },
    {
        id: 4,
        name: "Banana Bread",
        description: [
        "Preheat oven to 350°F.",
        "Cream butter and sugar.",
        "Add eggs and mix.",
        "Add flour, baking soda, salt, then add sour cream, lemon juice, milk and vanilla and mix.",
        "Mash bananas and add to batter.",
        "Pour into pan and bake at 350 for 55-60 minutes."
        ],
        ingredients: [      
            {
                name: "butter",
                measurement: "1/2 c."
            },
            {
                name: "banana",
                measurement: "3, ripe"
            },
            {
                name: "flour",
                measurement: "1 1/2 c."
            },
            {
                name: "milk",
                measurement: "1 c."
            }, 
            {
                name: "baking soda",
                measurement: "1 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "sugar",
                measurement: "3/4 c."
            },
            {
                name: "eggs",
                measurement: "2"
            },
            {
                name: "lemon juice",
                measurement: "2 tsp."
            },
            {
                name: "sour cream",
                measurement: "1/4 c."
            },
            {
                name: "vanilla",
                measurement: "1 tsp."
            },
            {
                name: "walnuts",
                measurement: "1/2 c."
            }
        ],
        cuisine: "American",
        meal: "dessert",
        foodType: "bread",
        oven: 350,
        image: "xxx"
    },
    {
        id: 5,
        name: "Chicken Vesuvio",
        description: [
            "Preheat oven to 375°F",
            "Pat chicken dry. Mix flour, basil, oregano, salt, thyme, pepper, rosemary and sage in a shallow dish.",
            "Coat chicken and shake of excess.",
            "Heat oil in a pan and fry chicken until light brown. Place on a plate lined with paper towel.",
            "Pour off all but 2 tbls. of fat from skillet and cook the potatoes the same way.",
            "Put chicken and potatoes into skillet, sprinkle with garlic and parsley and pour the wine over all.",
            "Bake uncovered 20-25 minutes.",
            "Remove and let stand for 5 minutes. Serve with juices."
        ],
        ingredients: [      
            {
                name: "chicken",
                measurement: "1 cut up, about 3 lbs."
            },
            {
                name: "flour",
                measurement: "1/3 c."
            },
            {
                name: "basil",
                measurement: "1 1/2 tsp."
            },
            {
                name: "oregano",
                measurement: "3/4 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "thyme",
                measurement: "1/4 tsp."
            },
            {
                name: "pepper",
                measurement: "1/4 tsp."
            },
            {
                name: "rosemary",
                measurement: "pinch"
            },
            {
                name: "sage",
                measurement: "pinch"
            },
            {
                name: "olive oil",
                measurement: "1/2 c."
            },
            {
                name: "baking potatoes",
                measurement: "3, cut into lengthwise wedges"
            },
            {
                name: "garlic",
                measurement: "3 cloves"
            },
            {
                name: "parsley",
                measurement: "3 tbls."
            },
            {
                name: "dry white wine",
                measurement: "3/4 c."
            }
        ],
        cuisine: "Italian",
        oven: 375,
        meal: "dinner",
        foodType: "chicken",
        serves: 4,
        image: "xxx"
    },
    {
        id: 6,
        name: "Peperonata",
        description: [
            "Cook and stir onions in oil on a 10\" skillet until tender.",
            "Add remaining ingredients except tomatoes.",
            "Cover and cook over low heat for 10 minutes.",
            "Add tomatoes. Cover and simmer until green peppers are tender, about 5 minutes.",
            "Garnish with ripe olives."
        ],
        ingredients: [      
            {
                name: "onions",
                measurement: "2 medium size, sliced"
            },
            {
                name: "tomatoes",
                measurement: "2 medium size, chopped"
            },
            {
                name: "olive oil",
                measurement: "2 tbls."
            },
            {
                name: "green peppers",
                measurement: "3 medium size, cut in strips"
            },
            {
                name: "basil",
                measurement: "1 tsp."
            },
            {
                name: "red wine vinagar",
                measurement: "1 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "olives",
                measurement: "a handful"
            },
            {
                name: "pepper",
                measurement: "1/4 tsp."
            }
        ],
        cuisine: "Italian",
        foodType: "olives",
        meal: "sauce",
        serves: 4,
        image: "xxx"
    },
    {
        id:7,
        name: "Spaghetti with Butter and Marcella Hazan Cheese",
        ingredients: [
            {
                name: "spaghetti",
                measurement: "1 lb."
            },
            {
                name: "grated cheese",
                measurement: "1 c."
            },
            {
                name: "butter",
                measurement: "3 tbls."
            },
            {
                name: "whipped cream",
                measurement: "2 tbls."
            },
            {
                name:"salt",
                measurement: "pinch"
            },
            {
                name: "pepper",
                measurement: "pinch"
            }
        ],
        description: [
            "Cook spaghetti, drain and transfer to a bowl",
            "Immediately add 1/2 of the cheese and toss until it melts.",
            "Add butter and toss until melted.",
            "Add cream, salt, pepper and remaining cheese."
        ],
        cuisine: "Italian",
        meal: "dinner",
        foodType: "spaghetti",
        serves: 6,
        image: "xxx"
    },
    {
        id: 8,
        name: "Cinnamon Oatmeal Muffins",
        ingredients: [
            {
                name: "rolled oats",
                measurement: "1/2 c."
            },
            {
                name: "buttermilk",
                measurement: "3/4 c."
            },
            {
                name: "apple sauce",
                measurement: "1/3 c."
            },
            {
                name: "sugar",
                measurement: "1/2 c."
            },
            {
                name: "baking powder",
                measurement: "2 tsp."
            },
            {
                name: "cinnamon",
                measurement: "3/4 tsp."
            },
            {
                name: "olive oil",
                measurement: "2 tbls."
            },
            {
                name: "eggs",
                measurement: "1"
            },
            {
                name: "egg whites",
                measurement: "2"
            },
            {
                name: "flour",
                measurement: "1 c."
            },
            {
                name: "baking soda",
                measurement: "1/2 tsp."
            },
            {
                name: "salt",
                measurement: "1/4 tsp."
            }
        ],
        description: [
            "Preheat oven to 375°F.",
            "Grease or line 8 muffin cups.",
            "Combine oats, buttermilk and cheese and set aside for 15 minutes.",
            "Add remaining ingredients and mix until just combined.",
            "Spoon into muffin cups.",
            "Bake 20-25 minutes, until toothpick comes out clean."
        ],
        meal: "dessert",
        oven: 375,
        foodType: "bread",
        image: "xxx"
    },
    {
        id: 9,
        name: "Pasta with Sun Dried Tomatoes",
        ingredients: [
            {
                name: "linguine",
                measurement: "1/2 lb."
            },
            {
                name: "olive oil",
                measurement: "1/4 c., plus 2 tbls."
            },
            {
                name: "parsley",
                measurement: "1/3 c., chopped"
            },
            {
                name: "sun dried tomatoes",
                measurement: "1/4 c., chopped"
            },
            {
                name: "tomato paste",
                measurement: "1 tbls."
            },
            {
                name: "garlic",
                measurement: "1 clove"
            },
            {
                name: "red pepper flakes",
                measurement: "1/4 t."
            },
            {
                name: "parmesan",
                measurement: "to taste"
            },
            {
                name: "salt",
                measurement: "to taste"
            },
            {
                name: "pepper",
                measurement: "to taste"
            }
        ],
        description: [
            "Cook and drain pasta.",
            "Return to pot, add remaining ingredients and heat through."
        ],
        cuisine: "Italian",
        meal: "dinner",
        foodType: "pasta",
        serves: 2,
        image: "xxx"
    },
    {
        id:10,
        adobePage: 19,
        name: "Shrimp and Angel Hair Pasta",
        ingredients: [
            {
                name: "butter",
                measurement: "1 stick (4 oz.)"
            },
            {
                name: "green onions",
                measurement: "12 chopped"
            },
            {
                name: "olive oil",
                measurement: "1/3 c."
            },
            {
                name: "cooked shrimp",
                measurement: "1 lb."
            },
            {
                name: "garlic",
                measurement: "8 cloves"
            },
            {
                name: "broccoli",
                measurement: "3 fresh stalks"
            },
            {
                name: "parmesan",
                measurement: "1 1/4 c., grated"
            },
            {
                name: "salt",
                measurement: "to taste"
            },
            {
                name: "pepper",
                measurement: "to taste"
            },
            {
                name: "angel hair pasta",
                measurement: "8 oz., or 4 servings"
            }
        ],
        description: [
            "Melt butter with oil, then saute onions and garlic.",
            "Cook and drain noodles - set aside.",
            "Cut broccoli tops into bite size pieces and cook crisply in pan - set aside.",
            "Add cooked shrimp to onions and garlic and saute for 5 minutes.",
            "Add broccoli, noodles and cheese and heat through."
        ],
        cuisine: "Italian",
        meal: "dinner",
        foodType: "pasta",
        serves: 4,
        image: "xxx"
    },
    {
        id: 11,
        name: "Mrs. Field's Cookies",
        ingredients: [
            {
                name: "flour",
                measurement: "2 1/4 c."
            },
            {
                name: "baking soda",
                measurement: "1 tsp."
            },
            {
                name: "salt",
                measurement: "1/4 tsp."
            },
            {
                name: "brown sugar",
                measurement: "1 c."
            },
            {
                name: "sugar",
                measurement: "1 c."
            },
            {
                name: "butter",
                measurement: "1 c., not soft"
            },
            {
                name: "eggs",
                measurement: "2"
            },
            {
                name: "vanilla",
                measurement: "2 tsp."
            },
            {
                name: "chocolate chips",
                measurement: "2 c."
            },
            {
                name: "walnuts",
                measurement: "1 c., chopped"
            }
        ],
        description: [
            "Preheat oven to 300°F.",
            "Combine flour, baking soda and salt.",
            "Using wire whisk, mix and set aside.",
            "In a large bowl, using electric mixer, combine sugars on medium speed until blended to a uniform color.",
            "Add butter at low speed in 1\" chunks. Increase speed and cream into sugars",
            "Add eggs and vanilla, mix until blended.",
            "Add dry ingredients until dough has formed with a light dusting of flour.",
            "Add chocolate chips and walnuts, mix at low speed until blended.",
            "Drop by tablespoon on ungreased cookie sheet, roughly 2\" apart.",
            "Bake for 22-24 minutes. Makes 2 1/2 dozen cookies"
        ],
        meal: "dessert",
        foodType: "cookies",
        oven: 300,
        image: "xxx"
    },
    {
        id: 12,
        name: "Quick French Onion Soup",
        ingredients: [
            {
                name: "butter",
                measurement: "1/4 c."
            },
            {
                name: "onions",
                measurement: "3 to 4, thinly sliced"
            },
            {
                name: "flour",
                measurement: "1 tbls."
            },
            {
                name: "beef broth",
                measurement: "4 cans (14.5 oz. each)"
            },
            {
                name: "worchestershire sauce",
                measurement: "1 tbls."
            },
            {
                name: "white wine or sherry",
                measurement: "1/2 c."
            },
            {
                name: " croutons",
                measurement: "to taste, as topping"
            },
            {
                name: "mozzarella cheese",
                measurement: "to taste, as topping"
            }
        ],
        description: [
            "Saute onions in butter for 15-20 minutes, until tender.",
            "Stir inflour and add remaining ingredients.",
            "Simmer uncovered for 20 minutes.",
            "Serve hot with croutons topped with mozzarella cheese"
        ],
        cuisine: "French",
        meal: "lunch or dinner",
        image: "xxx"
    },
    {
        id: 13,
        name: "Berry-Poppy Seed Salad",
        ingredients: [
            {
                name: "salad oil",
                measurement: "3 tbls."
            },
            {
                name: "honey",
                measurement: "3 tbls."
            },
            {
                name: "vinegar",
                measurement: "1 tbls."
            },
            {
                name: "poppy seeds",
                measurement: "1 tsp."
            },
            {
                name: "mustard",
                measurement: "1/2 tsp."
            },
            {
                name: "lettuce",
                measurement: "4 c., torn Bibb or Boston lettuce"
            },
            {
                name: "strawberries",
                measurement: "2 c., sliced"
            },
            {
                name: "onion",
                measurement: "1 small, thinly sliced into rings"
            }
        ],
        description: [
            "For dressing, in a small bowl mix oil, honey, vinegar, poppy seed and mustard.",
            "Place all ingredients in a large bowl and toss with dressing."
        ],
        meal: "salad",
        serves: 4,
        image: "xxx"
    },
    {
        id: 14,
        name: "Marinara Sauce",
        ingredients: [
            {
                name: "garlic",
                measurement: "3 cloves"
            },
            {
                name: "onion",
                measurement: "2"
            },
            {
                name: "carrot",
                measurement: "1"
            },
            {
                name: "basil",
                measurement: "1 tsp., dried"
            },
            {
                name: "oregano",
                measurement: "1/2 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "olive oil",
                measurement: "1/4 c."
            },
            {
                name: "dry vermouth",
                measurement: "1 c."
            },
            {
                name: "tomato",
                measurement: "1 can (28 oz.)"
            },
            {
                name: "red pepper flakes",
                measurement: "1/4 tsp."
            }
        ],
        description: [
            "Mince garlic, onions and carrot in food processor.",
            "Heat the oil and add the vegetables.",
            "Cook over medium heat for about 4 minutes until softened.",
            "Add vermouth and cook uncovered about 15 minutes until most of it has cook off.",
            "Chop tomatoes, add them to the pot and add the seasonings.",
            "Cook uncovered, over low heat for about 45 minutes until thickened.",
            "Serve immediately.",
            "Place leftovers in the refridgerator for about 3 days or freeze for longer."
        ],
        cuisine: "Italian",
        meal: "sauce",
        image: "xxx"
    },
    {
        id: 15,
        name: "Roasted Eggplant Dip",
        ingredients: [
            {
                name: "eggplant",
                measurement: "1, large"
            },
            {
                name: "onion",
                measurement: "1 c., chopped"
            },
            {
                name: "parsley",
                measurement: "1/2 c., chopped"
            },
            {
                name: "lemon juice",
                measurement: "1/4 c."
            },
            {
                name: "cumin",
                measurement: "1 tbls."
            },
            {
                name: "paprika",
                measurement: "1 tbls."
            },
            {
                name: "garlic",
                measurement: "1/2 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "pepper",
                measurement: "1/2 tsp."
            },    
            {
                name: "olive oil",
                measurement: "3/4 c."
            },
            {
                name: "diced tomatoes",
                measurement: "1 can (14.5 oz.), drained"
            },
            {
                name: "pita bread",
                measurement: "for dipping"
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Peel and dice eggplant.",
            "Transfer eggplant and onion to 13\"X9\" pan.",
            "Combine parsley, lemon juice, cumin, paprika, garlic, salt and pepper.",
            "Slowly whisk in olive oil.",
            "Pour over veggies, toss lightly to coat and spread tomatoes over all.",
            "Bake for about 30 minutes.",
            "Allow to cool somewhat, transfer to food processor and puree.",
            "Serve with pita bread."],
        meal: "dip",
        oven: 350,
        image: "xxx"
    },
    {
        id: 16,
        name: "Neiman Marcus Bars",
        ingredients: [
            {
                name: "German chocolate cake mix",
                measurement: "1 package"
            },    
            {
                name: "butter",
                measurement: "1 stick"
            },
            {
                name: "eggs",
                measurement: "1 lb."
            },
            {
                name: "cream cheese",
                measurement: "8 oz."
            }
        ],
        description: [
            "For cake: Preheat oven to 350°F.",
            "Mix butter, 2 eggs and cake mix and pour into a greased 9\"X13\" pan.",
            "Bake for 45-50 minutes.",
            "For frosting: Cream together powdered sugar, 2 eggs and cream cheese.",
            "Pour over finished cake and serve."
        ],
        meal: "dessert",
        oven: 350,
        image: "xxx"
    },
    {
        id: 17,
        adobePage: 2,
        name: "Brandied Cheese Dip",
        ingredients: [
            {
                name: "cream cheese",
                measurement: "8 oz., softened"
            },    
            {
                name: "sour cream",
                measurement: "8 oz."
            },
            {
                name: "gouda",
                measurement: "1 1/2 c., shredded"
            },
            {
                name: "brandy",
                measurement: "3 tbls."
            },
            {
                name: "walnuts",
                measurement: "1/2 c., chopped"
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Mix together and scrape in quiche dish.",
            "Bake for 20 minutes.",
            "Remove from oven and sprinkle with walnuts.",
            "Return to oven and bake until lightly browned and puffed. About 5 minutes.",
            "Serve with sliced apples and french bread."
        ],
        meal: "dip",
        oven: 350,
        image: "xxx"
    },
    {
        id: 18,
        adobePage: 2,
        name: "Rumaki",
        ingredients: [
            {
                name: "bacon",
                measurement: "1 lb."
            },
            {
                name: "water chestnuts",
                measurement: "1 can"
            },
            {
                name: "catsup",
                measurement: "1/2 c."
            },
            {
                name: "sugar",
                measurement: "1/2 c."
            },
            {
                name: "brown sugar",
                measurement: "1/2 c."
            }
        ],
        description: [
            "Preheat oven to 400°F.",
            "Cut bacon in 1/3's and water chestnuts in 1/2's.",
            "Wrap chestnut with bacon and bake until bacon is done.",
            "Add catsup, sugar and brown sugar to sauce pan and simmer until warm.",
            "Add chestnuts to sauce and serve."
        ],
        meal: "appetizer",
        oven: 400,
        image: "xxx"
    },
    {
        id: 19,
        adobePage: 3,
        name: "Laurie's Meatballs",
        ingredients: [
            {
                name: "cocktail meatballs",
                measurement: "1 box"
            },
            {
                name: "whole berry cranberries",
                measurement: "1 can"
            },
            {
                name: "chili sauce",
                measurement: "1 jar"
            },
            {
                name: "water in chili sauce jar",
                measurement: "1 jar"
            },
            {
                name: "brown sugar",
                measurement: "1 c."
            },
            {
                name: "sauerkraut",
                measurement: "1 can"
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Mix together and add meatballs.",
            "Bake for 30 minutes (or until warm)."
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 20,
        adobePage: 3,
        name: "Asparagus Dip",
        ingredients: [
            {
                name: "canned asparagus",
                measurement: "3/4 c., drained and mashed"
            },
            {
                name: "bacon",
                measurement: "5 slices, crumbled"
            },
            {
                name: "green onions",
                measurement: "4, chopped with tops"
            },
            {
                name: "Hidden Valley Ranch Dressing",
                measurement: "1 envelope"
            },
            {
                name: "dill",
                measurement: "1 tsp."
            },
            {
                name: "mayonaise",
                measurement: "1 c."
            },
            {
                name: "sour cream",
                measurement: "1 c."
            }
        ],
        description: [
            "Mix together and chill."
        ],
        meal: "appetizer",
        cook: "Nancy",
        image: "xxx"
    },
    {
        id: 21,
        adobePage: 3,
        name: "Brie",
        ingredients: [
            {
                name: "brie",
                measurement: "1 wheel"
            },
            {
                name: "dried cranberries",
                measurement: "1 handful"
            },
            {
                name: "raspberry jam",
                measurement: "1 tbls."
            },
            {
                name: "honey",
                measurement: "1 tbls."
            },
            {
                name: "pecans",
                measurement: "1 handful"
            }
        ],
        description: [
            "Top with either dried cranberries and raspberry jam or honey and pecans.",
            "Cook in oven till warm, 5-7 minutes."
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 22,
        adobePage: 4,
        name: "Lucille's Salsa Dip",
        ingredients: [
            {
                name: "cream cheese",
                measurement: "16 oz."
            },
            {
                name: "peach salsa",
                measurement: "10 oz."
            },
            {
                name: "Bob Evan's Original Sausage",
                measurement: "1/2 lb."
            },
            {
                name: "Bob Evan's Hot Sausage",
                measurement: "1/2 lb."
            }
        ],
        description: [
            "Cook and drain sausage.",
            "Mix all together and microwave till hot."
        ],
        meal: "appetizer",
        microwave: "yes",
        image: "xxx"
    },
    {
        id: 23,
        adobePage: 4,
        name: "Buffalo Wings",
        ingredients: [
            {
                name: "chicken wings",
                measurement: "4-5 lbs."
            },
            {
                name: "oregano",
                measurement: "1 tsp."
            },
            {
                name: "basil",
                measurement: "1 tsp."
            },
            {
                name: "garlic powder",
                measurement: "1 tsp."
            },
            {
                name: "butter",
                measurement: "4 oz."
            },
            {
                name: "soy sauce",
                measurement: "2 tbls."
            },
            {
                name: "tabasco sauce",
                measurement: "2 oz. (1/2 bottle)"
            },
            {
                name: "buffalo sauce",
                measurement: "4.5 oz."
            }
        ],
        description: [
            "Preheat oven to 450°F.",
            "Place wings in pan and sprinkle with oregano, basil and garlic powder. Drizzle with oil.",
            "Bake wings for 20 minutes.",
            "Drain off liquid.",
            "In a saucepan heat butter, soy, tobasco, and hot sauce.",
            "Pour sauce over wings and bake for 1\" hour, turning ocassionally until brown and crisp."
        ],
        meal: "appetizer",
        oven: 450,
        image: "xxx"
    },
    {
        id: 24,
        adobePage: 5,
        name: "Vidalia Onion Dip",
        ingredients: [
            {
                name: "vidalia onions",
                measurement: "1 c."
            },
            {
                name: "swiss cheese",
                measurement: "1 c., shredded"
            },
            {
                name: "mayonaise",
                measurement: "1 c."
            },
            {
                name: "parmesan",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Mix together and top with parmesan cheese.",
            "Bake for 20-25 minutes.",
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 25,
        adobePage: 5,
        name: "Layered Pesto Dip",
        ingredients: [
            {
                name: "cream cheese",
                measurement: "8 oz."
            },
            {
                name: "butter",
                measurement: "8 tbls."
            },
            {
                name: "pesto",
                measurement: "1 container"
            },
            {
                name: "sun dried tomatoes",
                measurement: "1 jar"
            },
            {
                name: "onion",
                measurement: "1 c., diced"
            },
            {
                name: "pine nuts",
                measurement: "handful"
            }
        ],
        description: [
            "Divide ingredients in half.",
            "Line a small crock pot with plastic wrap.",
            "Mix cream cheese and onions.",
            "1st layer is cream cheese and onion mixture.",
            "2nd layer is pesto.",
            "3rd layer is sun dried tomatoes.",
            "Repeat the above for layers 4-6, wrap and refridgerate overnight.",
            "Unmold and top with pine nuts."
        ],
        meal: "appetizer",
        image: "xxx"
    },

    {
        id: 26,
        adobePage: 6,
        name: "Crabmeat Dip",
        ingredients: [
            {
                name: "cream cheese",
                measurement: "8 oz."
            },
            {
                name: "mayonaise",
                measurement: "2/3 c."
            },
            {
                name: "mustard",
                measurement: "1 tsp."
            },
            {
                name: "garlic",
                measurement: "1/2 tsp."
            },
            {
                name: "onion",
                measurement: "1/3 c., chopped"
            },
            {
                name: "lemon juice",
                measurement: "half a lemon"
            },
            {
                name: "crab",
                measurement: "6 oz."
            },
            {
                name: "onion powder",
                measurement: "1 tsp."
            },
            {
                name: "salt",
                measurement: "pinch"
            },
            {
                name: "pepper",
                measurement: "pinch"
            }
        ],
        description: [
            "Mix ingredients together and serve."
        ],
        meal: "appetizer",
        image: "xxx"
    },
    {
        id: 27,
        adobePage: 6,
        name: "BLT Dip",
        ingredients: [
            {
                name: "bacon",
                measurement: "3 slices"
            },
            {
                name: "cream cheese",
                measurement: "8 oz."
            },
            {
                name: "onion",
                measurement: "1 whole onion, diced"
            },
            {
                name: "tomato",
                measurement: "1 whole tomato, diced"
            },
            {
                name: "milk or sour cream",
                measurement: "enough to soften cream cheese"
            }
        ],
        description: [
            "Soften cream cheese with a little milk or sour cream.",
            "Mix ingredients together and serve."
        ],
        meal: "appetizer",
        image: "xxx"
    },
    {
        id: 28,
        adobePage: 6,
        name: "Sugared Pecans",
        ingredients: [
            {
                name: "pecans",
                measurement: "1 lb., halved"
            },
            {
                name: "egg white",
                measurement: "1"
            },
            {
                name: "cinnamon",
                measurement: "1 tsp."
            },
            {
                name: "cold water",
                measurement: "1 tsp."
            },
            {
                name: "sugar",
                measurement: "1 c."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Preheat oven to 250°F.",
            "Beat egg white with water until fluffy.",
            "Fold in pecans until well coated.",
            "Mix cinnamon, sugar and salt.",
            "Fold in pecans.",
            "Bake on cookie sheet for 1 hour."
        ],
        meal: "dessert",
        oven: 250,
        image: "xxx"
    },
    {
        id: 29,
        adobePage: 7,
        name: "Hot Artichoke Dip",
        ingredients: [
            {
                name: "pimentos",
                measurement: "1/4 oz., diced in jar"
            },
            {
                name: "artichoke hearts",
                measurement: "14 oz. can, drained and chopped"
            },
            {
                name: "mayonaise",
                measurement: "1 1/2 c."
            },
            {
                name: "parmesan",
                measurement: "1/2 c., grated"
            },
            {
                name: "monterey jack cheese",
                measurement: "4 oz., shredded"
            },
            {
                name: "green chiles",
                measurement: "4 oz., diced"
            },
            {
                name: "cocktail rye or crackers",
                measurement: "to serve"
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Mix all ingredients together (reserve some parmesan and pimentos).",
            "Pour into shallow baking dish.",
            "Sprinkle with reserved parmesan and pimentos.",
            "Bake, uncovered, for 30 minutes or until bubbly.",
            "Serve with cocktail rye or crackers."
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 30,
        adobePage: 7,
        name: "Spinach Artichoke Dip",
        ingredients: [
            {
                name: "romano cheese",
                measurement: "1/2 c., grated"
            },
            {
                name: "artichoke hearts",
                measurement: "6 1/4 oz. can, drained"
            },
            {
                name: "garlic",
                measurement: "1 clove"
            },
            {
                name: "spinach",
                measurement: "10 oz. frozen package, thawed and drained"
            },
            {
                name: "garlic and clove cream cheese",
                measurement: "8 oz."
            },
            {
                name: "eggs",
                measurement: "2"
            },
            {
                name: "mozzarella cheese",
                measurement: "1 c., shredded"
            }
        ],
        description: [
            "Preheat oven to 375°F.",
            "In a food processor, mince romano and garlic.",
            "Add spinach, artichokes, cream cheese and eggs.",
            "Process until blended.",
            "Pour into bowl and fold in mozarella.",
            "Transfer to baking dish and bake for 20-25 minutes."
        ],
        meal: "appetizer",
        oven: 375,
        image: "xxx"
    },
    {
        id: 31,
        adobePage: 8,
        name: "Parmesan Tortilla Crisps",
        ingredients: [
                {
                name: "olive oil",
                measurement: "1/3 c."
            },
            {
                name: "dried oregano",
                measurement: "1 tbls."
            },
            {
                name: "parmesan cheese",
                measurement: "1 c., grated"
            },
            {
                name: "corn tortillas",
                measurement: "1 package"
            },
            {
                name: "black pepper",
                measurement: "1/2 tsp."
            },
            {
                name: "salt",
                measurement: "1/4 tsp."
            }
        ],
        description: [
            "Preheat oven to 375°F.",
            "Line two large cookie sheets with foil.",
            "Whisk oil, oregano and pepper in a medium sauce pan.",
            "Heat until warm, then cool for 15 minutes.",
            "Cut tortillas into 1/2\" to 3/4\" strips and brush oil mixture on both sides.",
            "Put on baking sheet and sprinkle with salt and parmesan cheese.",
            "Bake until brown and crsip, 8-10 minutes."
        ],
        meal: "appetizer",
        oven: 375,
        image: "xxx"
    },
    {
        id: 32,
        adobePage: 8,
        name: "Mushroom Canapes",
        ingredients: [
            {
                name: "mayonaise",
                measurement: "1 c."
            },
            {
                name: "parmesan cheese",
                measurement: "1/2 c., grated"
            },
            {
                name: "french fried onion rings",
                measurement: "1 can, 2.8 oz."
            },
            {
                name: "mushrooms",
                measurement: "1 jar, 4 oz. mushrooms, drained and chopped"
            },
            {
                name: "garlic",
                measurement: "1 clove, chopped"
            },
            {
                name: "cocktail rye bread",
                measurement: "1 loaf"
            }
        ],
        description: [
            "Preheat oven to 375°F.",
            "Mix all ingredients together.",
            "Spread on lightly toasted cocktail rye.",
            "Broil for 2-3 minutes."
        ],
        meal: "appetizer",
        oven: 375,
        image: "xxx"
    },
    {
        id: 33,
        adobePage: 9,
        name: "Jan's Asparagus Rolls",
        ingredients: [
            {
                name: "asparagus",
                measurement: "1 lb."
            },
            {
                name: "cream cheese",
                measurement: "8 oz."
            },
            {
                name: "crumbled blue cheese",
                measurement: "1 container"
            },
            {
                name: "eggs",
                measurement: "1"
            },
            {
                name: "butter",
                measurement: "1 tbsp."
            },
            {
                name: "white bread",
                measurement: "1 loaf"
            }
        ],
        description: [
            "Preheat oven to 350°F.",
            "Blanch asparagus.",
            "Roll out bread slices with crusts removed.",
            "Spread with cheese mixture and add spear.",
            "Roll up, brush with butter and bake until browned.",
            "Cut in half and serve."
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 34,
        adobePage: 9,
        name: "Deviled Eggs",
        ingredients: [
            {
                name: "eggs",
                measurement: "10, hard boiled"
            },
            {
                name: "chives",
                measurement: "1/2 c., chopped"
            },
            {
                name: "mayonaise",
                measurement: "1/4 c."
            },
            {
                name: "dijon mustard",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Scoop out yolks. Place in a bowl and mash",
            "Mix in 2 tbls. chives, mayonaise and mustard.",
            "Season with salt and pepper.",
            "Mound into eggs halves.",
            "Sprinkle with remaining chives."
        ],
        meal: "appetizer",
        notes: "Can be made 6 hours in advance.",
        image: "xxx"
    },
    {
        id: 36,
        adobePage: 10,
        name: "Green Olive Salad",
        ingredients: [
            {
                name: "green olives",
                measurement: "1 lb., pitted"
            },
            {
                name: "onion",
                measurement: "1, large"
            },
            {
                name: "celery",
                measurement: "5 ribs"
            },
            {
                name: "red pepper flakes",
                measurement: "1/4 tsp."
            },
            {
                name: "olive oil",
                measurement: "3/4 c."
            },
            {
                name: "dried oregano",
                measurement: "2 tbls."
            }
        ],
        description: [
            "Cut olives in half and chop onion and celery.",
            "Mix together in large bowl.",
            "Add oregano, red pepper flakes and olive oil. Mix well.",
            "Let sit at room temperature for 2-3 hours.",
            "Sprinkle with remaining chives."
        ],
        meal: "appetizer",
        notes: "Best served at room temperature with bread or crackers.",
        image: "xxx"
    },
    {
        id: 37,
        adobePage: 10,
        name: "Reuben Dip",
        ingredients: [
            {
                name: "cream cheese",
                measurement: "16 oz."
            },
            {
                name: "Buddig corn beef",
                measurement: "2 packages"
            },
            {
                name: "scallions",
                measurement: "3, chopped"
            },
            {
                name: "mayonaise",
                measurement: "1/2 c."
            },
            {
                name: "swiss cheese",
                measurement: "8 oz., shredded"
            }
        ],
        description: [
            "Mix together all ingredients.",
            "Bake for 30-45 minutes.",
            "Serve with cocktail rye or in rye bread bowl.",
        ],
        meal: "appetizer",
        oven: 350,
        image: "xxx"
    },
    {
        id: 38,
        adobePage: 11,
        name: "Carmelized Onion Dip",
        ingredients: [
            {
                name: "olive oil",
                measurement: "1 tbls."
            },
            {
                name: "onions",
                measurement: "2 c., sliced"
            },
            {
                name: "fresh sage",
                measurement: "2 tsp."
            },
            {
                name: "mayonaise",
                measurement: "3/4 c."
            },
            {
                name: "sour cream",
                measurement: "3/4 c."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "black pepper",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Cook onions in oil over medium heat with cover on for 20-30 minutes.",
            "Remove onions and let cool.",
            "Whisk mayonaise, sour cream, sage, salt and pepper.",
            "Stir in onions."
        ],
        meal: "appetizer",
        image: "xxx"
    },
    {
        id: 39,
        adobePage: 11,
        name: "Giada Ciabatta",
        ingredients: [
            {
                name: "cheddar cheese",
                measurement: "8 oz., shredded"
            },
            {
                name: "butter",
                measurement: "6 oz., room temperature"
            },
            {
                name: "garlic",
                measurement: "2 cloves, chopped"
            },
            {
                name: "scallions",
                measurement: "4, chopped"
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "black pepper",
                measurement: "1 tsp."
            },
            {
                name: "chiabatta",
                measurement: "1 lb. loaf"
            }
        ],
        description: [
            "Combine cheeses and butter in a food processor.",
            "Add scallions, garlic, salt and pepper.",
            "Spread on ciabatta and bake for 10-12 minutes."
        ],
        meal: "appetizer",
        oven: 400,
        image: "xxx"
    },
    {
        id: 40,
        adobePage: 12,
        name: "Goat Cheese Dip",
        ingredients: [
            {
                name: "goat cheese",
                measurement: "4 oz."
            },
            {
                name: "roasted red peppers",
                measurement: "1-2"
            },
            {
                name: "sour cream",
                measurement: "1/4 c."
            },
            {
                name: "lemon juice",
                measurement: "1 tbls."
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            }
        ],
        description: [
            "Puree peppers.",
            "Then add garlic, goat cheese, lemon juice and sour cream and puree.",
            "Season with salt and pepper."
        ],
        meal: "appetizer",
        image: "xxx"
    },
    {
        id: 41,
        adobePage: 13,
        name: "Spiaggia's Chicken Stock",
        ingredients: [
            {
                name: "onion",
                measurement: "1 large, unpeeled"
            },
            {
                name: "garlic",
                measurement: "2 whole cloves and 2 peeled cloves"
            },
            {
                name: "chicken",
                measurement: "3-3 1/2 lb. whole chicken"
            },
            {
                name: "water",
                measurement: "1 gallon"
            },
            {
                name: "celery",
                measurement: "1 rib"
            },
            {
                name: "carrot",
                measurement: "1 medium"
            },
            {
                name: "black peppercorns",
                measurement: "1/2 tsp."
            },
            {
                name: "parmesan rind",
                measurement: "6 oz."
            },
            {
                name: "salt",
                measurement: "1 1/2 tsp."
            },
            {
                name: "bay leaves",
                measurement: "2"
            }
        ],
        description: [
            "Put onion with cloves cut side down into a foil lined cast iron skillet.",
            "Cook over medium/high heat for 10 minutes until brown.",
            "Put in stock pot, add chicken, water, celery, carrot, bay leaves, peppercorns, garlic, parmesan cheese and salt.",
            "Heat to a lively simmer, skimming the surface.",
            "Reduce heat and simmer gently, skimming the top periodically for about 3 hours.",
            "Add enough water to cover the chicken, if necessary.",
            "Remove chicken meat and bones and strain the stock.",
            "Refridgerate and discard teh fat on top."
        ],
        meal: "lunch or dinner",
        image: "xxx"
    },
    {
        id: 42,
        adobePage: 14,
        name: "Hungarian Steak Soup",
        ingredients: [
            {
                name: "oil",
                measurement: "2 tbls."
            },
            {
                name: "steak",
                measurement: "1 1/2 lb., boneless and cut into 3/4 inch cubes"
            },
            {
                name: "green pepper",
                measurement: "1, 1/2 chopped and 1/2 cut into 3/4 inch strips"
            },
            {
                name: "red pepper",
                measurement: "1, 1/2 chopped and 1/2 cut into 3/4 inch strips"
            },
            {
                name: "sweet paprika",
                measurement: "1 tsp."
            },
            {
                name: "hot paprika",
                measurement: "1 tsp."
            },
            {
                name: "pepper",
                measurement: "1/4 tsp."
            },
            {
                name: "toasted caraway seeds",
                measurement: "1/2 tsp."
            },
            {
                name: "beef broth",
                measurement: "6 c."
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "bay leaves",
                measurement: "2"
            },
            {
                name: "tomato paste",
                measurement: "2 tsp."
            },
            {
                name: "egg noodles",
                measurement: "6 oz."
            },
            {
                name: "onion",
                measurement: "1 medium, 1/2 coarsely chopped and 1/2 sliced"
            },
            {
                name: "sour cream",
                measurement: "for garnish"
            }
        ],
        description: [
            "Heat oil in a stock pot over medium/high heat.",
            "Add 1/2 of meat and brown for 4 minutes.",
            "Remove and repeat with other 1/2 of meat.",
            "Add chopped peppers and onions and cook for 4-5 minutes.",
            "Add paprikas, black pepper and caraway and cook for 1 minute.",
            "Pour in broth, bay leaves, garlic, tomato paste and steak.",
            "Simmer, partially covered for 1 hour.",
            "Strain through colander, reserve meant and broth and discard any veggies.",
            "Add onion, peppers, borth and meat and simmer for 7-8 minutes or until veggies are tender.",
            "Serve with egg noodles."
        ],
        meal: "lunch or dinner",
        image: "xxx"
    },
    {
        id: 43,
        adobePage: 15,
        name: "Lamb Stew",
        ingredients: [
            {
                name: "onion",
                measurement: "1 1/2 c., chopped"
            },
            {
                name: "lamb",
                measurement: "1 lb., boneless and cut into 3/4 inch cubes"
            },
            {
                name: "butter",
                measurement: "2 tsp."
            },
            {
                name: "dry red wine",
                measurement: "1/2 c., merlot"
            },
            {
                name: "plum tomatoes",
                measurement: "1 can, drained and chopped"
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "cinnamon",
                measurement: "1/4 tsp."
            },
            {
                name: "dried red chili pepper",
                measurement: "2"
            },
            {
                name: "parsley",
                measurement: "2 tsp., chopped"
            }
        ],
        description: [
            "In a frying pan, cook the onion in butter until soft then remove and reserve.",
            "Pat the lamb driy with a paper towel.",
            "Cook lamb on medium/high heat to sear all sides, salt and pepper to taste.",
            "Add wine and bring to a boil, scraping the bottom of the pan to deglaze.",
            "Return onions to the pan and add tomatoes, garlic, red wine and cinnamon.",
            "Cover and cook for 1 1/2 hours, stirring ocassionally.",
            "Garnish with parsley and serve over rice or noodles.",
        ],
        meal: "lunch or dinner",
        image: "xxx"
    },
    {
        id: 44,
        adobePage: 16,
        name: "Chili",
        ingredients: [
            {
                name: "Italian sausage",
                measurement: "1 lb."
            },
            {
                name: "ground beef",
                measurement: "1 lb."
            },
            {
                name: "onion",
                measurement: "1 c., chopped"
            },
            {
                name: "green pepper",
                measurement: "3/4 c., chopped"
            },
            {
                name: "garlic",
                measurement: "1 clove, chopped"
            },
            {
                name: "basil",
                measurement: "1/2 tsp."
            },
            {
                name: "bay leaves",
                measurement: "1"
            },
            {
                name: "tomatoes",
                measurement: "1 can, 16 oz."
            },
            {
                name: "cumin",
                measurement: "2 tsp."
            },
            {
                name: "kidney beans",
                measurement: "1 can, 16 oz."
            },
            {
                name: "tomato sauce",
                measurement: "1 can, 8 oz."
            },
            {
                name: "chili powder",
                measurement: "2 tsp."
            }
        ],
        description: [
            "Brown beef, sausage, onion, green pepper and garlic.",
            "Drain the fat.",
            "Add undrained tomatoes, kidney beans, tomato sauce, chili powder and basil. Salt and pepper to taste.",
            "Cover and simmer for about 20 minutes.",
        ],
        meal: "soup",
        serves: "4-6",
        foodType: "beef and pork",
        image: "xxx"
    },
    {
        id: 45,
        adobePage: 16,
        name: "Slow Cooker Chicken Taco Soup",
        ingredients: [
            {
                name: "onion",
                measurement: "1 c., chopped"
            },
            {
                name: "chili beans",
                measurement: "2 cans, 1 medium and 1 mild"
            },
            {
                name: "canned corn",
                measurement: "1 can"
            },
            {
                name: "tomato sauce",
                measurement: "1 can, 8 oz."
            },
            {
                name: "chicken and taco seasoning",
                measurement: "1 package"
            },
            {
                name: "diced tomatoes with chilis",
                measurement: "2 cans, 10 oz. each"
            },
            {
                name: "chicken",
                measurement: "3 whole, skinless, boneless breasts"
            },
            {
                name: "beer",
                measurement: "1 bottle"
            },
            {
                name: "cheddar cheese",
                measurement: "1 c., shredded, for topping"
            },
            {
                name: "sour cream",
                measurement: "1/3 c., for topping"
            },
            {
                name: "tortilla chips",
                measurement: "1 bag, for topping"
            },
            {
                name: "tomato sauce",
                measurement: "1 can, 8 oz."
            },
            {
                name: "chili powder",
                measurement: "2 tsp."
            }
        ],
        description: [
            "Place onion, beans, corn, tomato sauce, beer, seasoning and diced tomatoes in crock pot and stir.",
            "Add in chicken and cover.",
            "Cook on low for 5 hours.",
            "Remove chicken, shred and place back in pot.",
            "Cook 1 more hour on low.",
            "Serve with toppings."
        ],
        meal: "soup",
        serves: "4-6",
        foodType: "",
        image: "xxx"
    },
    {
        id: 46,
        adobePage: 17,
        name: "Chicken and Vegetable Stew",
        ingredients: [
            {
                name: "margarine",
                measurement: "1 tbls."
            },
            {
                name: "flour",
                measurement: "2 tbls."
            },
            {
                name: "onion",
                measurement: "1 small, chopped"
            },
            {
                name: "carrot",
                measurement: "1 medium, diced"
            },
            {
                name: "celery",
                measurement: "1 rib, diced"
            },
            {
                name: "parsnip",
                measurement: "1, diced"
            },
            {
                name: "bay leaves",
                measurement: "1"
            },
            {
                name: "thyme",
                measurement: "to taste"
            },
            {
                name: "chicken",
                measurement: "3/4 lb. breast, cut in cubes"
            },
            {
                name: "chicken stock",
                measurement: "1 c."
            },
            {
                name: "lemon rind",
                measurement: "1 tsp., grated"
            },
            {
                name: "nutmeg",
                measurement: "1/2 tsp."
            },
            {
                name: "parsley",
                measurement: "2 tbls., chopped"
            },
            {
                name: "water",
                measurement: "1/2 c."
            },
            {
                name: "egg noodles",
                measurement: "1 package"
            }
        ],
        description: [
            "Melt the margarine in a large saute pan.",
            "Lightly fry the onion, carrot, celery and parsnip.",
            "Add the chicken breast, brown quickly then reduce heat.",
            "Add salt and pepper & 1/2 c. water.",
            "Cover and simmer about 15-20 minutes.",
            "Mix flour and chicken stock, then stir into pan with lemon rind, nutmeg and parsley.",
            "Cover and simmer for 45 minutes. Add more stock if needed.",
            "Serve over noodles."
        ],
        meal: "soup",
        serves: "4-6",
        foodType: "chicken",
        image: "xxx"
    },
    {
        id: 47,
        adobePage: 18,
        name: "Pesto",
        ingredients: [
            {
                name: "basil",
                measurement: "4 c."
            },
            {
                name: "olive oil",
                measurement: "1/2 c."
            },
            {
                name: "pine nuts",
                measurement: "1/4 c."
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "parsley",
                measurement: "5 sprigs"
            },
            {
                name: "parmesan cheese",
                measurement: "1/2 c., grated"
            }
        ],
        description: [
            "Place basil in food processor, add oil, garlic, parsley, salt and pepper and pine nuts.",
            "Blend well.",
            "Remove from food processor and add cheese."
        ],
        meal: "appetizer",
        foodType: "",
        image: "xxx"
    },
    {
        id: 48,
        adobePage: 18,
        name: "Spaghetti with Butter and Cheese",
        ingredients: [
            {
                name: "spaghetti noodles",
                measurement: "1 lb."
            },
            {
                name: "whipped cream",
                measurement: "2 tsp."
            },
            {
                name: "cheese",
                measurement: "1 c., grated"
            },
            {
                name: "butter",
                measurement: "3 tbls."
            }
        ],
        description: [
            "Cook spaghetti and drain.",
            "Transfer to bowl and immediately add 1/2 of the cheese.",
            "Toss until it melts and add the butter.",
            "Toss until melted and add cream, salt and pepper and the remaining cheese."
        ],
        meal: "pasta",
        foodType: "cheese",
        image: "xxx"
    },
    {
        id: 49,
        adobePage: 20,
        name: "James Beard Italian Style Pot Roast",
        ingredients: [
            {
                name: "pork roast",
                measurement: "1, 4-6 lbs."
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "olive oil",
                measurement: "4 tbls."
            },
            {
                name: "onion",
                measurement: "2 large, sliced"
            },
            {
                name: "bay leaves",
                measurement: "1"
            },
            {
                name: "thyme",
                measurement: "1/2 tsp."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "tomato puree",
                measurement: "1 1/2 c."
            },
            {
                name: "beef stock, made with boullion cube",
                measurement: "1/2 c."
            },
            {
                name: "butter",
                measurement: "3 tbls."
            }
        ],
        description: [
            "Sear in olive oil until nicely browned.",
            "Add onions, bay leaf, thyme, salt, tomato puree and beef stock.",
            "Cover and simmer for 25 minutes per pound or until tender.",
            "Add carrots and remove roast from pan. Skim ecess fat from pan.",
            "Add remaining tomato puree and bring sauce to a boil, stirring well."
        ],
        meal: "dinner",
        foodType: "pork",
        image: "xxx"
    },
    {
        id: 50,
        adobePage: 21,
        name: "Pork Tenderloin",
        ingredients: [
            {
                name: "pork tenderloins",
                measurement: "3, whole loins"
            },
            {
                name: "olive oil",
                measurement: "1/4 c."
            },
            {
                name: "basil",
                measurement: "1/4 c."
            },
            {
                name: "rosemary",
                measurement: "1/4 c."
            },
            {
                name: "thyme",
                measurement: "1/4 c."
            },
            {
                name: "salt",
                measurement: "1/4 tsp."
            },
            {
                name: "pepper",
                measurement: "1 tsp."
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "dijon mustard",
                measurement: "1 1/2 tsp."
            },
            {
                name: "balsamic vinegar",
                measurement: "1 1/2 tsp."
            }
        ],
        description: [
            "Mix all ingredients together.",
            "Marinate the pork tenderloins as desired.",
            "Grill or in over for 20-25 minutes."
            ],
        meal: "dinner",
        foodType: "pork",
        oven: 350,
        image: "xxx"
    },
    {
        id: 51,
        adobePage: 21,
        name: "Meatballs in Mushroom Gravy",
        ingredients: [
            {
                name: "beef",
                measurement: "1 lb., ground chuck"
            },
            {
                name: "pork",
                measurement: "1 lb., ground"
            },
            {
                name: "onion",
                measurement: "1 medium, minced"
            },
            {
                name: "bread crumbs",
                measurement: "1 c."
            },
            {
                name: "rice",
                measurement: "1/2 c."
            },
            {
                name: "salt",
                measurement: "1 1/2 tsp."
            },
            {
                name: "pepper",
                measurement: "1/4 tsp."
            },
            {
                name: "milk",
                measurement: "1 c."
            },
            {
                name: "eggs",
                measurement: "1"
            },
            {
                name: "cream of mushroom soup",
                measurement: "1 can"
            },
            {
                name: "water",
                measurement: "1 c."
            }
        ],
        description: [
            "Mix together and shape into balls.",
            "Mix can of mushroom soup and water. Pour over meatballs.",
            "Bake for 1 1/4 hours."
            ],
        meal: "dinner",
        foodType: "pork and beef",
        oven: 350,
        image: "xxx"
    },
    {
        id: 52,
        adobePage: 22,
        name: "Veal Piccata",
        ingredients: [
            {
                name: "veal cutlets",
                measurement: "4, boneless"
            },
            {
                name: "flour",
                measurement: "1 c."
            },
            {
                name: "white wine",
                measurement: "1/2 c."
            },
            {
                name: "lemon juice",
                measurement: "1 tbls."
            },
            {
                name: "olive oil",
                measurement: "1 tbls."
            },
            {
                name: "butter",
                measurement: "1 tbls."
            }
        ],
        description: [
            "Flatten veal and dredge lightly in flour.",
            "Heat the oil and butter in a large skillet.",
            "When it's very hot, saute the veal for 1 minute on each side. Remove veal and set aside.",
            "Add wine and lemon and bring to a boil.",
            "Scrape the pan and pour over the veal."
            ],
        meal: "dinner",
        foodType: "veal",
        oven: 350,
        image: "xxx"
    },
    {
        id: 53,
        adobePage: 22,
        name: "Onion Soup Pork Roast",
        ingredients: [
            {
                name: "pork roast",
                measurement: "1"
            },
            {
                name: "white wine",
                measurement: "2 c."
            },
            {
                name: "onion soup",
                measurement: "1 box"
            },
            {
                name: "garlic",
                measurement: "slivers"
            }
        ],
        description: [
            "Combine the envelope of soup mix and 1 cup of white wine.",
            "Cut slit into roast and insert garlic.",
            "Marinate for several hours.",
            "Mix envelope of soup and rest of white wine. Baste while cooking.",
            "Cover and simmer for 25 minutes per pound or until tender."
            ],
        meal: "dinner",
        foodType: "pork",
        image: "xxx"
    },
    {
        id: 54,
        adobePage: 23,
        name: "Veal Marsala",
        ingredients: [
            {
                name: "veal cutlets",
                measurement: "4"
            },
            {
                name: "flour",
                measurement: "1/2 c."
            },
            {
                name: "mushrooms",
                measurement: "2 c."
            },
            {
                name: "butter",
                measurement: "2 tbls."
            },
            {
                name: "olive oil",
                measurement: "1 tsp."
            },
            {
                name: "marsala",
                measurement: "1/2 c."
            }
        ],
        description: [
            "Flatten veal and dredge with flour.",
            "Melt the butter in a skillet.",
            "Add mushrooms and saute over medium heat for 15 minutes and remove and set aside.",
            "Add olive oil t pan and heat to very hot.",
            "Saute the veal over high heat for about 1 minute per side. Remove and set aside each piece.",
            "Add masala and simmer until slightly reduce for about 2 minutes.",
            "Add mushrooms and salt and pepper.",
            "Heat through and serve."
            ],
        meal: "dinner",
        foodType: "veal",
        image: "xxx"
    },
    {
        id: 55,
        adobePage: 23,
        name: "Pork Chops",
        ingredients: [
            {
                name: "pork chops",
                measurement: "4, 1 1/2 to 2 inch thick chops"
            },
            {
                name: "olive oil",
                measurement: "1/2 c."
            },
            {
                name: "thyme",
                measurement: "1 tsp."
            },
            {
                name: "butter",
                measurement: "2 tbls."
            }
        ],
        description: [
            "Brush pork chops with olive oil, thyme and salt and pepper.",
            "Saute in butter to brown.",
            "Bake for 15-20 minutes."
            ],
        meal: "dinner",
        foodType: "pork",
        oven: 325,
        image: "xxx"
    },
    {
        id: 56,
        adobePage: 24,
        name: "Marinated Pork Roast",
        ingredients: [
            {
                name: "pork roast",
                measurement: "1, 3-5 lbs."
            },
            {
                name: "olive oil",
                measurement: "1/4 c."
            },
            {
                name: "brown sugar",
                measurement: "2 tbls."
            },
            {
                name: "ground ginger",
                measurement: "1 tbls."
            },
            {
                name: "dry mustard",
                measurement: "1 tsp."
            },
            {
                name: "soy sauce",
                measurement: "1/2 c."
            },
            {
                name: "garlic",
                measurement: "6 cloves"
            }
        ],
        description: [
            "Mix all marinade ingredients and place in zip lock bag with pork.",
            "Marinate for 8 hours, then reserve marinade.",
            "Roast 25-30 minutes per pound. Baste with reserved marinade."
            ],
        meal: "dinner",
        foodType: "pork",
        oven: 325,
        image: "xxx"
    },
    {
        id: 57,
        adobePage: 24,
        name: "Beef Tenderloin",
        ingredients: [
            {
                name: "beef tenderloin",
                measurement: "1, 3 3/4 lbs."
            },
            {
                name: "garlic",
                measurement: "3 cloves, slivered"
            },
            {
                name: "olive oil",
                measurement: "1 tbls."
            }
        ],
        description: [
            "Cut slits in meat, insert garlic and rub with salt and pepper.",
            "Place on a baking sheet and bake for 15 minutes.",
            "Reduce the temperature to 350 and bake for an additional 20 minutes.",
            "For rare bake 5 minutes long and for medium bake 10 minutes longer.",
            "Let stand for 20 minutes then slice."
            ],
        meal: "dinner",
        foodType: "beef",
        oven: 425,
        image: "xxx"
    },
    {
        id: 58,
        adobePage: 25,
        name: "Steak with Scallion and Red Wine",
        ingredients: [
            {
                name: "beef",
                measurement: "2 filets, 1 inch thick"
            },
            {
                name: "scallions",
                measurement: "1-2"
            },
            {
                name: "butter",
                measurement: "2 tsp."
            },
            {
                name: "olive oil",
                measurement: "1 tsp."
            },
            {
                name: "red wine",
                measurement: "6 tsp."
            },
            {
                name: "garlic",
                measurement: "1 clove, minced"
            }
        ],
        description: [
            "Slice scallions and salt and pepper the filets.",
            "Heat the frying pan and add 1 tsp. of butter and oil until foamy.",
            "Add steaks and cook until well browned for 5 minutes. Turn and cook 5 minutes more.",
            "Remove steaks and set aside.",
            "Add scallions and garlic to pan and cook over medium heat for 1 minute.",
            "Add wine and cook another 1 minute, deglazing pan until syrupy.",
            "Pour sauce over steaks."
            ],
        meal: "dinner",
        foodType: "beef",
        image: "xxx"
    },
    {
        id: 59,
        adobePage: 25,
        name: "Grilled Lamp Chops",
        ingredients: [
            {
                name: "lamb chops",
                measurement: "8, 1 inch think chops"
            },
            {
                name: "oilive oil",
                measurement: "1 tsp."
            },
            {
                name: "steak seasoning",
                measurement: "2 tsp."
            }
        ],
        description: [
            "Heat grill to medium high.",
            "Rub steak with olive oil and seasoning.",
            "Grill for 12-14 minutes for medium rare and 15-17 minutes for medium well."
            ],
        meal: "dinner",
        foodType: "beef",
        grill: "medium high",
        image: "xxx"
    },
    {
        id: 60,
        adobePage: 26,
        name: "Sausage Bread",
        ingredients: [
            {
                name: "mozarella",
                measurement: "1 lb."
            },
            {
                name: "sausage",
                measurement: "2 lb."
            },
            {
                name: "parmesan",
                measurement: "1 c., grated"
            },
            {
                name: "bread",
                measurement: "1 loaf, frozen dough"
            },
            {
                name: "eggs",
                measurement: "2"
            }
        ],
        description: [
            "Cook and drain sausage.",
            "Mix in cheese and eggs.",
            "Roll out the dough (jelly roll) and fill with ingredients.",
            "Roll up dough and pinch together.",
            "Turn over and slit the top.",
            "Bake for 30 minutes."
            ],
        meal: "appetizer",
        foodType: "pork",
        oven: 375,
        image: "xxx"
    },
    {
        id: 61,
        adobePage: 26,
        name: "Sloppy Joe's",
        ingredients: [
            {
                name: "beef",
                measurement: "1 lb., ground chuck"
            },
            {
                name: "onion",
                measurement: "1 c., chopped"
            },
            {
                name: "celery",
                measurement: "1 rib, chopped"
            },
            {
                name: "green pepper",
                measurement: "1/2 pepper, chopped"
            },
            {
                name: "red wine vinegar",
                measurement: "2 tbls."
            },
            {
                name: "worstershire",
                measurement: "1 tbls."
            },
            {
                name: "brown sugar",
                measurement: "1 tbls."
            },
            {
                name: "stewed tomatoes",
                measurement: "1 can, 14 1/2 oz."
            },
            {
                name: "olive oil",
                measurement: "2 tbls."
            },
            {
                name: "oregano",
                measurement: "1/2 tsp."
            },
            {
                name: "ketchup",
                measurement: "1/2 c."
            },
            {
                name: "tomato sauce",
                measurement: "1/2 c."
            },
            {
                name: "water",
                measurement: "1/4 c."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "black pepper",
                measurement: "1 tsp."
            },
            {
                name: "garlic",
                measurement: "1 clove, minced"
            },
            {
                name: "tobasco",
                measurement: "to taste"
            }
        ],
        description: [
            "SAute onion, celery, peppers and garlic in olive oil.",
            "Add the beef and brown.",
            "Add remaining ingredients and simmer.",
            "Serve on hamburger buns."
            ],
        meal: "dinner",
        foodType: "beef",
        image: "xxx"
    },
    {
        id: 62,
        adobePage: 27,
        name: "Beef Stroganoff",
        ingredients: [
            {
                name: "beef tenderloin or sirloin",
                measurement: "1 lb."
            },
            {
                name: "butter",
                measurement: "4 tbls."
            },
            {
                name: "mushrooms",
                measurement: "1 1/2 c., sliced"
            },
            {
                name: "garlic",
                measurement: "1 clove"
            },
            {
                name: "onion",
                measurement: "1/2 c."
            },
            {
                name: "tomato paste",
                measurement: "1 tbls."
            },
            {
                name: "sour cream",
                measurement: "1 c."
            },
            {
                name: "flour",
                measurement: "3 tbls."
            },
            {
                name: "white wine",
                measurement: "2 tbls."
            },
            {
                name: "beef boullion",
                measurement: "1 cube"
            }
        ],
        description: [
            "Slice meat into bite sized pieces.",
            "Combine 1 tbls. flour, 1/2 tsp. salt and pepper and toss with the meat.",
            "Heat 2 tbls. butter and quickly brown the meat.",
            "Add and saute mushrooms, onion and garlic for 4-5 minutes.",
            "Remove mixture from the pan.",
            "Add 2 tbls. butter and 2 tbls. flour to the drippings.",
            "Add tomato paste. Salt and pepper to taste.",
            "Add 1 1/4 c. of stock and cook on medium high until bubbly.",
            "Stir and cook for 2 minutes longer.",
            "Combine sour cream, 1 tbls. of flour and white wine.",
            "Add meat, then add sour cream mixture.",
            "Heat gently through, without boiling.",
            "Serve over noodles."
            ],
        meal: "dinner",
        foodType: "beef",
        image: "xxx"
    },
    {
        id: 63,
        adobePage: 28,
        name: "Bloody Mary Flank Steak",
        ingredients: [
            {
                name: "flank steak",
                measurement: "1 lb."
            },
            {
                name: "V8 juice",
                measurement: "1 c."
            },
            {
                name: "vodka",
                measurement: "1/2 c."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "pepper",
                measurement: "1 tsp."
            },
            {
                name: "hot sauce",
                measurement: "1 tsp."
            },
            {
                name: "lemon juice",
                measurement: "1 tbls."
            },
            {
                name: "worcestershire",
                measurement: "1 tbls."
            },
            {
                name: "garlic powder",
                measurement: "1/2 tbls."
            },
            {
                name: "olive oil",
                measurement: "4 tbls."
            },
            {
                name: "onion powder",
                measurement: "1 tsp."
            },
            {
                name: "celery seed",
                measurement: "1 tsp."
            },
            {
                name: "horseradish",
                measurement: "1 tbls."
            }
        ],
        description: [
            "Mix all ingredients, except steak, in a baggie.",
            "Add steak and marinate in fridge for 8 or more hours.",
            "Heat grill to high.",
            "Remove steak from marinade and pat dry with paper towels.",
            "Sear both sides of steak on the grill and reduce heat to medium.",
            "Remove and let rest for 5 to 10 minutes.",
            "Slice and serve."
            ],
        meal: "dinner",
        foodType: "beef",
        grill: "high",
        image: "xxx"
    },
    {
        id: 64,
        adobePage: 28,
        name: "Grilled Rack of Lamb",
        ingredients: [
            {
                name: "lamb",
                measurement: "1 rack"
            },
            {
                name: "oilive oil",
                measurement: "1/4 c."
            },
            {
                name: "garlic",
                measurement: "3 cloves"
            },
            {
                name: "thyme",
                measurement: "1/8 c."
            }
        ],
        description: [
            "Marinate lamb with garlic, thyme and salt and pepper for 1 hour.",
            "Heat grill to high.",
            "Grill 6-8 minutes per side."
            ],
        meal: "dinner",
        foodType: "lamb",
        grill: "high",
        image: "xxx"
    },
    {
        id: 65,
        adobePage: 29,
        name: "Roast Leg of Lamb",
        ingredients: [
            {
                name: "lamb",
                measurement: "1 leg, 6 to 7 1/2 lbs."
            },
            {
                name: "lemon juice",
                measurement: "1/4 c."
            },
            {
                name: "garlic",
                measurement: "8 cloves, minced"
            },
            {
                name: "rosemary",
                measurement: "1 c. and 3 tbls."
            },
            {
                name: "salt",
                measurement: "1 tsp."
            },
            {
                name: "pepper",
                measurement: "2 tsp."
            },
            {
                name: "parsley",
                measurement: "1 c."
            },
            {
                name: "chives",
                measurement: "1 c."
            },
            {
                name: "onion",
                measurement: "2 c., diced"
            },
            {
                name: "red wine",
                measurement: "1 c."
            },
            {
                name: "chicken stock",
                measurement: "2 c."
            }
        ],
        description: [
            "Preheat oven to 400.",
            "Rub lamb with lemon juice. Pat with 3 tbls. rosemary and garlic evenly. Season with salt and pepper.",
            "Roast for 30 minutes.",
            "Reduce the oven to 350 and cook for 1 hour longer (until internal temperature of 150).",
            "Remove and let rest for 15 minutes.",
            "Add herbs and onions to the pan drippings.",
            "Add stock and wine to deglaze pan.",
            "Reduce over high heat.",
            "Slice lamb and drizzle sauce over."
            ],
        meal: "dinner",
        foodType: "lamb",
        oven: 400,
        image: "xxx"
    },
    {
        id: 66,
        adobePage: 30,
        name: "Herb Roasted Veal Chops",
        ingredients: [
            {
                name: "veal",
                measurement: "4 chops, 1 1/4 inch thick"
            },
            {
                name: "garlic",
                measurement: "2 cloves"
            },
            {
                name: "fresh sage or thyme",
                measurement: "2 tbls."
            },
            {
                name: "fresh rosemary",
                measurement: "2 tbls."
            },
            {
                name: "olive oil",
                measurement: "2 tbls."
            },
            {
                name: "pepper",
                measurement: "2 tbls."
            },
            {
                name: "salt",
                measurement: "2 tbls."
            },
            {
                name: "white wine",
                measurement: "1 c."
            },
            {
                name: "chicken stock",
                measurement: "1 c."
            },
            {
                name: "butter",
                measurement: "2 tbls."
            }
        ],
        description: [
            "Chop garlic and mix with herbs, salt and pepper and olive oil.",
            "Pat chops dry and rub with all but 1 tsp. of the herb mix.",
            "Chill for at least 15 minutes.",
            "Preheat oven to 375.",
            "Brown chops in oil over moderatly high heat for about 3 monites on each side.",
            "Place in baking pan and roast for 15 to 20 miuntes (until 160 internal temperature).",
            "Pour off fat from skillett, add wine and remaining herb mix and deglaze for 1 minute.",
            "Boil until reduced to about 1/4 c., about 4 minutes.",
            "Add broth and reduce by half, about 5 minutes.",
            "Remove from heat, add butter and pour over the chops."
            ],
        meal: "dinner",
        foodType: "veal",
        oven: 375,
        image: "xxx"
    },
    {
        id: 67,
        adobePage: 31,
        name: "Parmesan Crusted Pork Chops",
        ingredients: [
            {
                name: "pork",
                measurement: "4 chops, 1/2 to 3/4 inch thick"
            },
            {
                name: "eggs",
                measurement: "2, large"
            },
            {
                name: "breadcrumbs",
                measurement: "1 c."
            },
            {
                name: "olive oil",
                measurement: "6 tbls."
            },
            {
                name: "parmesan",
                measurement: "3/4 c."
            }
        ],
        description: [
            "Whisk eggs and place in a pie plate.",
            "Place breadcrumbs in another plate and parmesan in another.",
            "Sprinkle the chops with salt and pepper.",
            "Dip chops in cheese first, then eggs and finally breadcrumbs.",
            "Heat 3 tbls. of oil in a skillet and cook chops for 6 minutes each side (until 150 internal temperature)."
            ],
        meal: "dinner",
        foodType: "pork",
        image: "xxx"
    },
    {
        id: 68,
        adobePage: 31,
        name: "Oven Pork Tenderloin",
        ingredients: [
            {
                name: "pork",
                measurement: "2 to 3 tenderloins, 3 lbs. each"
            },
            {
                name: "garlic",
                measurement: "3 cloves"
            },
            {
                name: "olive oil",
                measurement: "3 tbls."
            },
            {
                name: "red pepper flakes",
                measurement: "1/2 tsp."
            },
            {
                name: "soy sauce",
                measurement: "2 tsp."
            },
            {
                name: "apple cider vinegar",
                measurement: "1 tsp."
            },
            {
                name: "brown sugar",
                measurement: "1 tsp."
            },
            {
                name: "fresh ginger",
                measurement: "2 tsp."
            },
            {
                name: "dijon mustard",
                measurement: "2 tsp."
            },
            {
                name: "all spice",
                measurement: "1/2 tsp."
            }
        ],
        description: [
            "Mix all ingredients and marinate for at least 2 hours.",
            "Preheat oven to 400.",
            "Heat pan on medium to high and sear pork on all sides.",
            "Transfer to oven and cook for 17 to 20 minutes."
            ],
        meal: "dinner",
        foodType: "pork",
        oven: 400,
        image: "xxx"
    },
    {
        id: 69,
        adobePage: 32,
        name: "Tuna Salad with Balsamic Vinegar and Grapes",
        ingredients: [
            {
                name: "tuna",
                measurement: "2, 6 oz. cans"
            },
            {
                name: "balsamic vinegar",
                measurement: "2 tbls."
            },
            {
                name: "red or green grapes",
                measurement: "6 oz., halved"
            },
            {
                name: "toasted almonds",
                measurement: "1/4 c."
            },
            {
                name: "fresh thyme",
                measurement: "2 tsp."
            },
            {
                name: "salt",
                measurement: "1/2 tsp."
            },
            {
                name: "pepper",
                measurement: "1/4 tsp."
            },
            {
                name: "onion",
                measurement: "2 tbls., chopped"
            },
            {
                name: "celery",
                measurement: "1 rib, chopped"
            },
            {
                name: "mayonaise",
                measurement: "1/2 c."
            },
            {
                name: "dijon mustard",
                measurement: "1/4 tsp."
            }
        ],
        description: [
            "Drain the tuna and separate with a fork.",
            "In a bowl mix tuna, vinegar, grapes, almonds, thyme, salt and pepper, celery and onion.",
            "Fold in mayonaise and mustard until evenly moist."
            ],
        meal: "dinner",
        foodType: "fish",
        serves: 4,
        image: "xxx"
    },
    {
        id: 70,
        adobePage: 32,
        name: "Salmon Sauce",
        ingredients: [
            {
                name: "olive oil",
                measurement: "1/4 c."
            },
            {
                name: "balsamic vinegar",
                measurement: "1 tbls."
            },
            {
                name: "tomato",
                measurement: "1, diced"
            },
            {
                name: "cucumber",
                measurement: "1/2 c., diced"
            }
        ],
        description: [
            "Mix and serve with salmon."
        ],
        meal: "sauce",
        foodType: "fish",
        image: "xxx"
    },
    {
        id: 71,
        adobePage: 33,
        name: "Grilled Swordfish",
        ingredients: [
            {
                name: "olive oil",
                measurement: "1/2 c."
            },
            {
                name: "lemon juice",
                measurement: "3 tbls."
            },
            {
                name: "garlic",
                measurement: "1 clove"
            },
            {
                name: "fresh basil",
                measurement: "1 tbls."
            },
            {
                name: "swordfish",
                measurement: "4 steaks, 5 to 6 oz."
            }
        ],
        description: [
            "Heat grill to medium high.",
            "Whisk oil, lemon juice, basil and garlic in a bowl.",
            "Salt and pepper to taste.",
            "Brush fish with 2 tbls. of sauce and grill 3 to 6 minutes per side.",
            "Remove from grill and spoon remaining sauce over fish."
        ],
        meal: "dinner",
        foodType: "fish",
        grill: "medium high",
        image: "xxx"
    },
    {
        id: 72,
        adobePage: 34,
        name: "Salmon Baked in Foil",
        ingredients: [
            {
                name: "olive oil",
                measurement: "2 tsp. and 2 tbls."
            },
            {
                name: "salmon",
                measurement: "4 fillets, 5 oz."
            },
            {
                name: "tomatoes",
                measurement: "3, chopped and drained"
            },
            {
                name: "shallots",
                measurement: "2, chopped"
            },
            {
                name: "lemon juice",
                measurement: "2 tbls."
            },
            {
                name: "thyme",
                measurement: "1 tsp."
            },
            {
                name: "oregano",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Preheat oven to 350.",
            "Sprinkle salmon with 2 tsp. of olive oil and salt and pepper.",
            "Mix tomatoes, shallots, remaining olive oil, lemon juice, oregano, thyme and salt and pepper.",
            "Place salmon in foil.",
            "Spoon the tomato mixure over it.",
            "Wrap up and seal package and then place on a baking sheet.",
            "Bake 20-25 minutes."
        ],
        meal: "dinner",
        foodType: "fish",
        oven: 350,
        image: "xxx"
    },
    {
        id: 73,
        adobePage: 35,
        name: "Basil Chicken",
        ingredients: [
            {
                name: "chicken",
                measurement: "2 whole breasts"
            },
            {
                name: "paprika",
                measurement: "1/2 tsp."
            },
            {
                name: "olive oil",
                measurement: "2 tbls."
            },
            {
                name: "chicken broth",
                measurement: "1/3 c."
            },
            {
                name: "white wine",
                measurement: "1/3 c."
            },
            {
                name: "basil",
                measurement: "1 tsp."
            }
        ],
        description: [
            "Heat oil in a skillet.",
            "Sprinkle chicken with paprika.",
            "Cook chicken for 5 minutes on each side.",
            "Add the remaining ingredients and bring to a boil.",
            "Simmer, covered for 10 to 15 minutes until juices run clear.",
            "Serve with sauce."
        ],
        meal: "dinner",
        foodType: "chicken",
        image: "xxx"
    },
    {
        id: 74,
        adobePage: 35,
        name: "Citrus Chicken Marinade",
        ingredients: [
            {
                name: "balsamic vinegar",
                measurement: "1/2 c."
            },
            {
                name: "honey",
                measurement: "2 tsp."
            },
            {
                name: "garlic",
                measurement: "to taste"
            },
            {
                name: "orange juice",
                measurement: "2, juiced"
            }
        ],
        description: [
            "Mix together the ingredients.",
            "Marinate and then grill or broil."
        ],
        meal: "sauce",
        foodType: "marinade",
        image: "xxx"
    },
    {
        id: 75,
        adobePage: 35,
        name: "Tangy Grilling Sauce",
        ingredients: [
            {
                name: "balsamic v",
                measurement: "1/2 c."
            },
            {
                name: "honey",
                measurement: "2 tsp."
            },
            {
                name: "garlic",
                measurement: "to taste"
            },
            {
                name: "orange juice",
                measurement: "2, juiced"
            }
        ],
        description: [
            "Mix together the ingredients.",
            "Marinate and then grill or broil."
        ],
        meal: "sauce",
        foodType: "marinade",
        image: "xxx"
    }
];
// loop through data and create a recipe for each

function seedDB() {
         //Remove all recipes
    Recipe.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Removed recipes.");
              //Add a few recipes
            data.forEach(function(seed){
                Recipe.create(seed, function(err, recipe){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a recipe..");
                    }
                });
            });
    });       //Add a few comments
};

module.exports = seedDB;