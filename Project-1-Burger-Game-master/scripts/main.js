
//  Used to calculate the catch range for falling ingredients
function range(num1,num2){
    arr = []
    if(num1>num2){
        return "First argument must be less than second.";
    }
    else {
        for (i=num1; i<=num2-1; i++){
            arr.push(i);
        }
    }
    return arr;
}

//  Used to compare the array for the player's constructed burger and the construction required to win
function areEqual(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            elementClass = element.getAttribute("class");
            arr2Class = array2[index].getAttribute("class")
            if (elementClass === arr2Class) {
                return true;
        }
        return false;
      });
    } 
    return false;
  }

//  Element selectors
var burg = document.getElementById("burger");
var bottomBun = document.querySelector("#bun-bottom");
var startButton = document.querySelector("#stButton");
var gameArea = document.querySelector("#gameWindow");
var titleDiv = document.getElementById("title")
var titleText = document.getElementById("textTitle")
var correctOrders = document.querySelector("#correct")


//  Retrieves and stores the distance from the left edge of the screen for each drop-pipe as a numeric value
pipe1Left = document.getElementById("pipe-1").offsetLeft

pipe2Left = document.getElementById("pipe-2").offsetLeft

pipe3Left = document.getElementById("pipe-3").offsetLeft

pipe4Left = document.getElementById("pipe-4").offsetLeft

locArr = [pipe1Left,pipe2Left,pipe3Left,pipe4Left];

//  var used in calculating the starting position of the player bun
var startPos = 0

burg.style.left = locArr[startPos]+"px";

//  Creating and styling the divs used as ingredients
const patty = document.createElement("div");
const patty2 = document.createElement("div");
const patty3 = document.createElement("div");
let patties = [patty, patty2, patty3];
patty.setAttribute("id","patty");
patties.forEach(element => {
    element.setAttribute("class","patty");
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "10px";
    element.style.width = "90px";
    element.style.marginLeft = "15px";
    element.style.backgroundColor = "rgb(81, 47, 25)";
});

const tomato = document.createElement("div");
const tomato2 = document.createElement("div");
const tomato3 = document.createElement("div");
let tomatoes = [tomato, tomato2, tomato3];
tomato.setAttribute("id","tomato");
tomatoes.forEach(element =>{
    element.setAttribute("class", "tomato");
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "10px";
    element.style.width = "50px";
    element.style.marginLeft = "35px";
    element.style.backgroundColor = "red";
});

const cheese = document.createElement("div");
const cheese2 = document.createElement("div");
const cheese3 = document.createElement("div");
let cheeses = [cheese, cheese2, cheese3];
cheese.setAttribute("id","cheese");
cheeses.forEach(element => {
    element.setAttribute("class", "cheese")
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "5px";
    element.style.width = "70px";
    element.style.marginLeft = "25px";
    element.style.backgroundColor = "orange";
});

const lettuce = document.createElement("div");
const lettuce2 = document.createElement("div");
const lettuce3 = document.createElement("div");
let lettuces = [lettuce, lettuce2, lettuce3]
lettuce.setAttribute("id","lettuce");
lettuces.forEach(element => {
    element.setAttribute("class", "lettuce")
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "5px";
    element.style.width = "85px";
    element.style.marginLeft = "17px";
    element.style.backgroundColor = "lawngreen";
});

const topBun = document.createElement("div");
const topBun2 = document.createElement("div");
let topBuns = [topBun, topBun2]
topBun.setAttribute("id","topBun");
topBuns.forEach(element => {
    element.setAttribute("class", "topBun")
    element.style.position = "absolute";
    element.style.top = "35px";
    element.style.marginLeft = "10px";
    element.style.height = "20px";
    element.style.width = "100px";
    element.style.borderRadius = "150px 150px 0 0";
    element.style.backgroundColor = "rgb(232, 167, 83)";
});

//  Used to track which ingredients will be dropped during the game
let levelIngredients = {
    level1: [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun, topBun2]

    //level2: [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun]
}

//  refreshes the levelIngredients arrays when depleted during levels
function restock(){
    levelIngredients.level1 = [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun,topBun2]
    //levelIngredients.level2 = [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun]
}

//  The goal for each level -- only level1 is used at present
const target = {
    level1: [bottomBun, patty, cheese, lettuce, tomato, topBun],
    level2: [bottomBun, lettuce, patty, cheese, lettuce, patty, cheese, topBun]
}

//  The array used to track the player's current stack of ingredients
let burgArr = [bottomBun]

//  Enables the player to use the L+R keyboard arrows to move their burger
document.onkeydown = moveBurg;
function moveBurg(e) {
    e = e || window.event;
    if (e.keyCode == '37' && startPos != 0) {
        // left arrow
        burg.style.left = locArr[startPos-1]+"px";
        startPos -= 1
    }
    else if (e.keyCode == '39' && startPos != 3) {
        // right arrow
        burg.style.left = locArr[startPos+1]+"px";
        startPos += 1     
    }
    else if ((e.keyCode == '37' || e.keyCode == '39') && (startPos === 0 || startPos === 3)){
        console.log("You're at the end of the counter! You'll drop the burger!")
    }
}

//  Used to calculate the drop speed of ingredients
var speed = 2;
//  Used to track how many correct orders the player has made
var currentLevel = 0;

//  This is where the fun begins
function startGame(){
    //  Hides the title, start button and holdover burger image from previous rounds after play begins
    burg.style.backgroundImage = "";
    startButton.style.display = "none";
    titleDiv.style.display = "none";
    
    //  Function for setting new ingredients for each level which I didn't have time to implement
    /*function setIngredients(){
        if (currentLevel===1){
            console.log("level1")
            return levelIngredients.level1;
        }
        else if (currentLevel===2){
            console.log("level2")
            return levelIngredients.level2;
        }
    }*/
    
    //  Sets the ingredients array for the level
    var currentIngredients = levelIngredients.level1;
    
    //  Function for rolling a new, random ingredient each time one is caught or missed
    function rollIngredient(){
        return currentIngredients[Math.floor(Math.random()*(currentIngredients.length))];
    }
    
    //  Function for rolling a random drop-pipe for each ingredient to fall from
    function rollDropLocation(){
        return locArr[Math.floor(Math.random()*(locArr.length))];
    }
    
    //  Stores the randomly selected ingredient
    var ingredient = rollIngredient();
    
    //  Sets the vertical starting position of the ingredient
    var yPos = 50;
    //  Sets the horizontal starting position of the ingredient
    var randomLoc = rollDropLocation();
    //  Establishes the starting position as a pixel value for style assignment
    var xPos = randomLoc+"px";
    
    // Function for increasing drop speed after every successful order
    function speedIncrease(){
        return speed += .5;
    }
    
    //  Variables for calculating the top and bottom of the player's catch range
    var catchCap = gameArea.offsetHeight-100;
    var catchZone = range(catchCap,gameArea.offsetHeight);

    //  creates the interval at which the game loop refreshes -- 5ms
    var id = setInterval(drop, 5) 
    function drop(){
            //  Sets up the game area by appending the ingredient div
            gameArea.appendChild(ingredient);
            //  Increase the variable which governs the ingredient's vertical position by the value of speed at each interval
            yPos+=speed;
            //  Moves the ingredient down the screen to the current value of yPos in px
            ingredient.style.top = yPos+"px"
            //  sets the ingredient's horizontal position to the previously established drop-pipe location
            ingredient.style.left = xPos;
            //  If the ingredient reaches the bottom of the screen and hasn't been caught,
            if(yPos >= gameArea.offsetHeight && burg.offsetLeft-10!=randomLoc){
                //  reset the vertical position to the top of the screen below the drop-pipes,
                yPos = 50;
                //  reroll the ingredient,
                ingredient = rollIngredient()
                //  reroll the pipe to drop from,
                randomLoc = rollDropLocation()
                //  and set the ingredient's position to that pipe
                xPos = randomLoc+"px";
            }
            //  Else if the player catches the ingredient,
            else if (catchZone.includes(yPos) && burg.offsetLeft-10===randomLoc){
                //  push the ingredient to the constructed burger array,
                burgArr.push(ingredient);
                
                let ingr = ""
                let ingrHeight = 0
                //  for each ingredient in the constructed burger array,
                burgArr.forEach(element => {
                    //  get the height of the ingredient's div and trim off the px value,
                    ingr = element.style.height.replace("px","")
                    //  set the value to 0 if the height is an empty property,
                    if(ingr==''){
                        ingr=0;
                    }
                    //  and add the height value to ingrHeight after parsing it as an integer
                    ingrHeight += parseInt(ingr)
                });

                //  sets the position for the ingredient to rest at as the remaining space in the main burger div
                var positionTop = 90 - parseInt(ingrHeight)
                //  gets the width of the ingredient and trims the px suffix in preparation for centering on the stack
                var ingrWidth = ingredient.style.width.replace("px","")
                /*  gets the value to use later for the ingredient's margin by dividing the width by 2 and subtracting
                from the burger div's width  */
                var positionWidth = (100 - parseInt(ingrWidth))/2
                
                //  clears the interval in preparation for the next ingredient drop
                clearInterval(id)
                //  sets the variable "yPos" back to default
                yPos = 50
                //  appends the ingredient div to the burger div
                burg.appendChild(ingredient)
                //  sets the ingredient position style,
                ingredient.style.position = "absolute";
                //  left-hand spacing to 0,
                ingredient.style.left = "0px";
                //  left hand margin to the previously established positionWidth,
                ingredient.style.marginLeft = positionWidth+"px";
                //  and space from the top of the burger div to the previously calculated resting place
                ingredient.style.top = positionTop+"px";

                //  sets the index of the ingredient to remove from the current ingredients array
                let removeIndex = currentIngredients.indexOf(ingredient)
                //  splices the ingredient at the above index
                currentIngredients.splice(removeIndex,1);

                //  if the classes of each element in the target array and constructed burger array match,
                if(areEqual(target.level1, burgArr)===true){
                    //  clear the interval,                   
                    clearInterval(id)
                    //  Display the start button and title,
                    startButton.style.display = "inline-block";
                    titleDiv.style.display = "block";
                    //  Alter the start button and title text to be congratulatory,
                    titleText.innerHTML = "Another satisfied customer!";
                    startButton.innerHTML = "Next, please!";
                    //  increment the correct order count by 1 and adjust the correctOrder text to reflect it;
                    currentLevel += 1;
                    correctOrders.innerHTML = `Correct orders: ${currentLevel}`;
                    //  call the speedIncrease function to increment the speed by 0.5,
                    speedIncrease();
                    //  reset the constructed burger array to include only the starting bun,
                    burgArr = [bottomBun];
                    //  restock the level's ingredients array,
                    restock()
                    burg.style.backgroundImage = "url(images/burgbg.png)";
                    burg.style.backgroundSize = "cover";

                    //  establish how many child elements are present in the burger div,
                    let burgLength = burg.childElementCount
                    //  iterate over them in reverse order as long as there is more than one child element left,
                    for (i=burgLength;i>1;i--){
                        //  remove the child element at index 1,
                        burg.removeChild(burg.children[1])
                    }
                    //  and re-calculate the number of child elements in the burger div
                    burgLength = burg.childElementCount
                
                //  else if the number of child elements in the burger div is greater than the length of the target array,
                } else if (burg.childElementCount > target.level1.length) {
                    //  clear the interval,                 
                    clearInterval(id)
                    //  re-display the start button and title,
                    startButton.style.display = "inline-block";
                    titleDiv.style.display = "block";
                    //  change their text to be indicative of the fail state,
                    titleText.innerHTML = "You're fired!"
                    startButton.innerHTML = "Start Over"
                    //  reset the correct orders count back to 0,
                    currentLevel = 0;
                    correctOrders.innerHTML = "Correct orders: 0";
                    //  reset the speed value,
                    speed = 2;
                    //  reset the constructed burger array,
                    burgArr = [bottomBun]
                    //  restock the level ingredients,
                    restock()
                    //  remove all child elements of the burger div except the bottom bun,
                    let burgLength = burg.childElementCount
                    for (i=burgLength;i>1;i--){
                        burg.removeChild(burg.children[1])
                        
                    }
                    //  and recalculate the number of child elements in the burger div
                    burgLength = burg.childElementCount

                    //  if none of the above conditions are met, continue to call the entire game loop until one of them is
                    } else {

                        startGame()
                    }
                }
            }
        }


//  Gives the start button an on-click listener to trigger the startGame function and begin the game.
startButton.addEventListener("click", startGame)