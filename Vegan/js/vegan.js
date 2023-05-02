// API Key for fatsecretPlatformAPI
var fatsecretPlatformAPIKey = '44385308c1e447f8bf9a2cea8191624f';
//Recipe Search API 
var edamanAPIKey = '04f42a1106f1c5216b12df8b78208f16'
var edamanID = '8f015481'
var dietInput // high-protein, balanced, high-fiber, low carb, low fat, low-sodium
var healthInput // vegan, dairy-free, egg-free, gluten-free, keto-friendly, low-sugar, no-oil-added, peanut-free, sesame-free, wheat-free, tree-nut-free, vegetarian
var excludeIngredient // exclude specific ingredient 
var bootLeanOption // true or false

var ingredEL = $('#list-ingred')
var result = []
var ingredientLinesData = []
var ingredientNutrients = []

// var edaman = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=' + edamanID + '&app_key=' + edamanAPIKey + '&diet='+ dietInput + '&health=' + input + '&excluded=' + excludeIngredient + '&random=' + bootLeanOption;

const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=8f015481&app_key=04f42a1106f1c5216b12df8b78208f16&diet=balanced&health=gluten-free&mealType=Breakfast&mealType=Dinner&mealType=Lunch&random=true"



// function processRecipeNutrients() { //process data on site
//     result
//     Name of Recipe
//     console.log(result[0].recipe.label)
//     $('#recipe-name').text(result[0].recipe.label)
//     // Picture of recipe
//     result[0].recipe.image
//     // Ingredients
//     console.log(result[0].recipe.ingredientLines[i])
//     // Recommended serving size
//     result[0].recipe.yield
//     // Nutrients 
//     result[0].recipe.calories
//     var omega3 = result[0].recipe.totalNutrients.FAPU.label // Omega 3(Polyunsaturated)
//     result[0].recipe.totalNutrients.FAPU.quantity // by gram result[0].recipe.totalNutrients.FAPU.unit
//     var omega3Val = result[0].recipe.totalNutrients.FAPU.quantity + ' ' + result[0].recipe.totalNutrients.FAPU.unit
//     var protein = result[0].recipe.totalNutrients.PROCNT.label // Protein
//     var proteinVal = result[0].recipe.totalNutrients.PROCNT.quantity + ' ' + result[0].recipe.totalNutrients.PROCNT.unit// by gram
//     var calcium = result[0].recipe.totalNutrients.CA.label // calcium
//     var calciumVal = result[0].recipe.totalNutrients.CA.quantity + ' ' + result[0].recipe.totalNutrients.CA.unit// by mg
//     var iron = result[0].recipe.totalNutrients.FE.label // iron
//     var ironVal = result[0].recipe.totalNutrients.FE.quantity + ' ' + result[0].recipe.totalNutrients.FE.unit//by mg
//     var vitB12 = result[0].recipe.totalNutrients.VITB12.label // vitamin B12
//     var vitB12Val = result[0].recipe.totalNutrients.VITB12.quantity + ' ' + result[0].recipe.totalNutrients.VITB12.unit// by µg
//     var vitD = result[0].recipe.totalNutrients.VITD.label // vitamin D
//     var vitDVal = result[0].recipe.totalNutrients.VITD.quantity + ' ' + result[0].recipe.totalNutrients.VITD.unit// by µg
//     Link to Recipe
  
//   }