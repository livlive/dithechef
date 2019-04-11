var mongoose    = require("mongoose");
var Recipe  = require("./models/recipe");
var Ingredient = require("./models/ingredient");
//var Comment     = require("./models/comment")

// starter data/seed data
//EXAMPLE

// "ingredients": [
//     {
//         "quantity": "1",
//         "name": "beef roast",
//         "type": "meat"
//     },
//     {
//         "quantity": "1 package",
//         "name": "brown gravy mix",
//         "type": "baking"
//     }
// ]
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
        ]
    },
    {
        id: 2,
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
                name: "parmesean",
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
        ]
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
        protein: "chicken",
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
        serves: 4,
        image: "xxx"
    },
    {
        id: 6,
        name: "Peperonata",
        description: [
            "Cook and stir onions in oil on a 10\" skillet util tender.",
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
        protein: "olives",
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
        serves: 2,
        image: "xxx"
    },
    {
        id:10,
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
        meal: "chicken",
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
    }
]

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
}

module.exports = seedDB;
