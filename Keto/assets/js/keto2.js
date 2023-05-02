let ketoBtn = document.querySelector('.keto-button');
let answer = document.querySelector('#h2');

let foods = ['Salmon', 'Beef', 'Pork', 'Tuna', 'Eggs', 'Butter', 'Avocados', 'Cheese', 'Yogurt', 'Spinach', 'Collard Greens', 'Cabbage', 'Lettuce', 'Kale', 'Swiss Chard', 'Peppers', 'Zucchini', 'Olives','Jicama', 'Turnips', 'Asparagus', 'Broccoli', 'Mushrooms','Cucumber', 'Green Beans','Eggplants','Tomatoes', 'Radishes', 'Celery', 'Okra', 'Bacon']

function getRandomNumber(min,max){
    let one = max - min + 1;
    let two = Math.random() * one;
    let answer = Math.floor(two) + min;

    return answer;
}

ketoBtn.addEventListener('click', () => {
    let index = getRandomNumber(0, foods.length-1);
    answer.innerText = foods[index];

})