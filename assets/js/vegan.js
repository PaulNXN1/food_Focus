// API Key for fatsecretPlatformAPI
var fatsecretPlatformAPIKey = '44385308c1e447f8bf9a2cea8191624f';
//Recipe Search API 
var edamanAPIKey = '04f42a1106f1c5216b12df8b78208f16'
var edamanID = '8f015481'
var dietInput // high-protein, balanced, high-fiber, low carb, low fat, low-sodium
var healthInput // vegan, dairy-free, egg-free, gluten-free, keto-friendly, low-sugar, no-oil-added, peanut-free, sesame-free, wheat-free, tree-nut-free, vegetarian
var excludeIngredient // exclude specific ingredient 
var bootLeanOption // true or false


var edaman = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=' + edamanID + '&app_key=' + edamanAPIKey + '&diet='+ dietInput + '&health=' + input + '&excluded=' + excludeIngredient + '&random=' + bootLeanOption;