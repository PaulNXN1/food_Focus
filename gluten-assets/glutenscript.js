// $(document).foundation();
document.querySelector('header');


function headerBanner() {
// call area that heading will go
var heading = document.getElementById('heading');
// create element h1 
var h1El = document.createElement('h1');
// modify element h1
h1El.textContent = "A Gluten Free Life";
h1El.setAttribute("class", "animate__bounceOut");
// append 
heading.append(h1El);
  }
headerBanner()
// Function to create input box for recipe search


function recipeEl() {
  // call area that heading will go
  var recipeSearchEl = document.getElementById('recipe-Search');
  // create inputbox and label
  var recipeInputEl = document.createElement('input');
  var recipeLabel =document.createElement("label");
  var recipeButton =document.createElement('button');
  
  // modify element h1
  recipeLabel.setAttribute ('id','label');
  recipeLabel.textContent = "Search for GF Recipes";
  recipeInputEl.setAttribute ('id','input');
  recipeButton.textContent='SUBMIT';
	recipeButton.setAttribute('id', 'submit');
  // append 
  recipeLabel.appendChild(recipeSearchEl);
  recipeInputEl.appendChild(recipeSearchEl);
	recipeButton.appendChild(recipeSearchEl);
    }
    recipeEl()






// import { corePlugins } from '../src/corePlugins'
// import fs from 'fs'
// import path from 'path'

// let corePluginList = Object.keys(corePlugins)

// fs.writeFileSync(
//   path.join(process.cwd(), 'src', 'corePluginList.js'),
//   `export default ${JSON.stringify(corePluginList)}`
// )

// var requestUrl = '';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//       // if the response status fails, then a failed message will appear
//       else{
//         responseText.textContent = "failed (" + response.status + ")";
//       }
//       return response.json();
//   });
// }

// getApi(requestUrl);

// window.onload=function(){
//   var example = document.getElementById('divone');
//   var h1 = document.createElement('h1');
//   h1.innerText = "hi";
//   example.appendChild(h1);
//       }



