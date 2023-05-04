// $(document).foundation();
document.querySelector('header');
var ingredEL = $('#list-ingred')
var result = []
var ingredientLinesData = []
var ingredientNutrients = []


function headerBanner() {
// call area that heading will go
var heading = document.getElementById('heading');
// create element h1 
var h1El = document.createElement('h1');
// modify element h1
h1El.textContent = "A Gluten Free Life";
h1El.setAttribute("class", "animate__animated animate__fadeInDown");

// append 
heading.append(h1El);
  }
headerBanner()



function getRecipe() { //responsible for data needed
  const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=8f015481&app_key=04f42a1106f1c5216b12df8b78208f16&diet=balanced&health=keto-friendly&mealType=Breakfast&mealType=Dinner&mealType=Lunch&random=true"
  $.ajax( {
    url: url,
    method: 'GET',
  })
  .then(function(response) {
    for( i = 0; i < 5; i++) {
      result.push(response.hits[i])
      // var i = result.shift();
      $('#recipe-name').html(result[i].recipe.label)
      $('#food-img').attr("src", result[i].recipe.image)
      $('#recipe-site').attr("href", result[i].recipe.url )
      result[0].recipe.source
      // return false;
    }
    ingredientLinesData.push(result[0.0].recipe.ingredientLines)
    ingredientNutrients.push(result[0].recipe.totalNutrients)
    // call next function
  })
  .then(function() {
      for( i = 0; i < ingredientLinesData.length; i++) {
        // console.log(processRecipeNutrients);
        console.log(ingredientLinesData[0.0]);
        var liEL = document.createElement('li')
        $.each( ingredientLinesData[0.0], function(key, value){
        $(ingredEL).append('<li>' + value + '</li>')
      })
    }
  
    console.log(ingredientNutrients)
    var omega3 = ingredientNutrients[0].FAPU.label + ' : ' + ingredientNutrients[0].FAPU.quantity.toFixed(2) + ' ' + ingredientNutrients[0].FAPU.unit
    var protein = ingredientNutrients[0].PROCNT.label + ' : ' + ingredientNutrients[0].PROCNT.quantity.toFixed(2) + ' ' + ingredientNutrients[0].PROCNT.unit
    var calcium = ingredientNutrients[0].CA.label + ' : ' + ingredientNutrients[0].CA.quantity.toFixed(2) + ' ' + ingredientNutrients[0].CA.unit
    var iron = ingredientNutrients[0].FE.label + ' : ' + ingredientNutrients[0].FE.quantity.toFixed(2) + ' ' + ingredientNutrients[0].FE.unit
    var vitB12 = ingredientNutrients[0].VITB12.label + ' : ' + ingredientNutrients[0].VITB12.quantity.toFixed(2) + ' ' + ingredientNutrients[0].VITB12.unit
    var vitD = ingredientNutrients[0].VITD.label + ' : ' + ingredientNutrients[0].VITD.quantity.toFixed(2) + ' ' + ingredientNutrients[0].VITD.unit
    $('.omega3').html(omega3);
    $('.protein').html(protein);
    $('.calcium').html(calcium);
    $('.iron').html(iron);
    $('.vitB12').html(vitB12);
    $('.vitD').html(vitD);
    $('#list-ingred li').attr('class', 'generated-list')
  })

}

function refreshPage(){
  window.location.reload();
}
$('#generate').on('click', refreshPage)
// var btnEL = document.getElementById('generate').addEventListener('click', getRecipe)
var btnEL = $('generate')
// $('#generate').on('click', getRecipe)
$(window).on('load', getRecipe);







