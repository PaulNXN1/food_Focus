// $(document).foundation();

// Function to create input box for recipe search


function recipeEl() {
  // call area that heading will go
  var recipeSearchEl = document.getElementById('recipe-Search');
  // create inputbox and label
  var recipeInputEl = document.createElement('input', search);
  var recipeLabel =document.createElement("label");
  // modify element h1
  recipeLabel.textContent = "Search GF Recipes";
 
  // append 
recipeLabel.append(recipeSearchEl);
recipeInputEl.append(recipeSearchEl);
    }
  


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

// window.onload=function(){
//   var example = document.getElementById('divone');
//   var h1 = document.createElement('h1');
//   h1.innerText = "hi";
//   example.appendChild(h1);
//       }



