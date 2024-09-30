# GA SEI Project 1: “Welcome to Hamburger Monarch” - Burger-Building Game

### Deployed App: https://c-t-ailey.github.io/Project-1-Burger-Game/

![burgermonarch](https://i.imgur.com/Va1QakM.png)

#### Table of Contents
* Introduction
  * Brief and Requirements
  * Project Overview
  * Contributors
  * Timeframe
  * Technologies Employed
* Planning and Preparation
  * User Stories
  * Wireframe
* Development
  * Process
  * Featured Code
* Outcome
  * Challenges
  * Wins
  * Bugs
  * Future Inclusions and Improvements
  * Key Learnings


### Introduction

#### Project Requirements

* Build a web application from scratch, without a starter codebase.
* Use programming skills to devise the game logic for the application.
* Maintain separate HTML, CSS, and JavaScript files in your application.
* Employ KISS and DRY design principles.
* Use JavaScript and/or jQuery for DOM manipulation.
* Build an application to a specification provided by a third party.

#### Project Overview

“Welcome to Hamburger Monarch” is a web-based, arcade-style game inspired by the cooking-themed minigames present in various video games. The player starts with only the bottom bun of their burger and a preview of their expected final product, with ingredients falling randomly from above as the player attempts to catch them in the correct order. Upon completion, the player will progress a level, and the ingredients will begin to fall faster. If they stack their ingredients incorrectly, they will lose the game and be prompted to start again from Level 1.

#### Contributors
This project was completed as a solo assignment. 

#### Timeframe
This project was completed over the course of seven days, with three days dedicated to planning and preparation and four days dedicated to active programming.

#### Technologies Employed
* HTML
* CSS/Flexbox
* JavaScript
* Git & GitHub

### Planning and Preparation

When first given the freedom to be creative with a subject, I naturally gravitate towards the theme of “Burgers”. 
Everybody knows what burgers are; they’re composed of a few simple elements in an often-varied but easily identifiable order, they’re visually distinctive, simple in construction, and the places which sell them are now an integral part of our food culture. I imagined the simplicity, recognizability and relatability of this ubiquitous food would endear and engage potential players, and lend themselves their implementation . I took inspiration from the style of food- and cooking-themed minigames present in titles such as Konami’s “Bishi Bashi” arcade game series and Nintendo’s “Cooking Mama” titles.
I opted for a style of gameplay where the user would attempt to catch falling ingredients for their burger according to an image of their end goal, with the win condition triggering if stacked successfully and failing if burger reaches its target height without being in the correct order. I felt this would be a challenging development while being achievable, particularly because it would require understanding how to animate DOM elements, making them interact with each other at various positions on the screen, and selecting the elements to be displayed at any given time.

#### User Stories

* To more clearly envision how the gameplay loop would work, I worked through each step as a series of User Stories. These helped clarify the elements I would need to implement, and made the priority of each one more apparent. Each one would be required in order to have a functional, fundamentally complete game, as follows:
* As a new player, I want to see the rules so I can understand how to play before I begin.
* As a new player, I want to click a button so I can begin the game when I'm ready.
* As a player, I want to see the structure of the burger which is my objective, so I know in which order I should be catching ingredients.
* As a player, I want to be able to manipulate the cursor in the form of a burger bun, so I can catch ingredients and build my burger.
* As a player, I want to see my ingredients stacked up as I catch them, so I can identify my progress and see if I am matching the objective.
* As a victorious player, I want to see a message indicating my victory, so I clearly know I have successfully completed the level.
* As a victorious player, I want to see my completed burger, so I know I have correctly matched the objective.
* As a victorious player, I want to click a marked progression button, so I can proceed to the next level of the game.
* As a losing player, I want to see a message indicating my loss, so I clearly know I have failed to complete the level.
* As a losing player, I want to click a marked restart button, so I can replay the game from the start.

#### Wireframing
The wireframe design for the project was extremely straightforward - I had conceived a clear enough vision for the game that the first draft of the wireframe was the only one required to complete it, with despite only a few minor changes along the way, the final product remained virtually unchanged from this stage.

![burgerwireframe](https://i.imgur.com/TzkpGB7.jpg)

### Development

#### Process
#### Day 1 - Layout and Basic Gameplay Functionality
My objective for Day 1 was to stake out the basic layout elements of which the game would comprise, i.e. the sidebar, the drop pipes, the start button, and the bun base which would serve as the player cursor. This was a relatively swift process consisting of very basic <div> elements with plain text.

The next objective was applying basic styling to the existing elements. The pipes needed to be spaced evenly at the top of the screen; the natural solution to this problem was to simplify the process by employing Flexbox. The other elements were simple enough to place with standard CSS rules.

After this came the time to implement some basic functionality. The first task I opted to tackle was making it possible for the player to move the "bottom bun" of their burger, so that the core mechanic of catching ingredients at various drop points could be facilitated. This feature worked by the end of Day 1, but took up the entire day in the process. Ultimately, the solution to this was simple enough -- it proved to be a matter of logging the positions of the drop pipes at the top of the screen, storing them in variables, and employing an if/else if function to log key presses and move the cursor left or right to the pipe location beside its current position.

#### Day 2 - Falling Ingredients and Positional Element Interactions
After getting the cursor to move on a left/right key press, the next step was implementing the falling burger components. After using DOM manipulation to create a "burger patty" div and add adequate styling to it, I built a function containing a setInterval method which would randomly select one of the four drop pipes, spawn the ingredient directly below it, and cause it to move vertically down the screen towards the bottom of the game area. Unfortunately it would take a great deal more work to get the ingredient to stop falling beyond the edge of the game area.

The rest of Day 2 was spent trying to get the cursor to catch ingredients, which was eventually accomplished by detecting if the ingredient had hit the precise Y-coordinate on the screen which indicated the bottom of the game area while the cursor was in that same position. With some assistance from the class instructor, I was also able to get the ingredients to stack on top of each other. However, this introduced a fresh challenge where ingredients would continue to respawn at the drop pipes and, in doing so, remove themselves from the visible stack of ingredients.

#### Day 3 - Solving the Win Condition
Day 3 was a day of major breakthroughs all around. A few hours of hard work yielded results in getting missed ingredients to be randomly rerolled and respawned at a new drop point, and the problem of vanishing burger components was solved by creating a list of the ingredients for the level and splicing them from the list once caught, until all ingredients available had been caught. This was a suboptimal solution, since it would mean less variety of ingredients to catch was available as the game progressed, but as it meant the game was closer to being functional, it was an acceptable trade-off.

Further work resulted in the creation of "win" and "lose" states for the game; if an array of the components in the player's constructed burger was identical to an array of the components in a pre-set "target" array, the player would win; otherwise, if the arrays were not in the same order, the player would lose.

The next step was to get the game to progress to a "new level" after successfully passing the round, or starting over if the round was lost. Starting over was easily accomplished by re-setting all variables which had been changed in the course of the game to their initial states, but moving on to a new level with extra ingredients and a new objective proved unfeasible with the game in its current state. Every issue present in the early stages of building the first level reared their ugly heads once again, and after a day of multiple successes, this seemed to be a fine place to leave it.

#### Day 4 - Final Adjustments and Compromises
With the remaining time growing ever shorter, resolutions had to be made; level progression as I had originally envisioned it would have to be revised. I managed to implement some of my original concepts by creating multiple elements with the same class to stand in as copies for each ingredient, so that the variety of random drops wouldn't appear as visibly impacted by catching them as before. The win condition was rewritten to check that each ingredient in the two comparison arrays would check for the classes of those elements, rather than the element names themselves; the finishing touch to the code itself came with implementing at least some indication of level progression by incrementing the rate at which the ingredients would descend by 0.5px per level completed, and resetting back to default when the player loses.
The rest of the day was dedicated to CSS and sourcing some appropriately fast food-themed resources for backgrounds before deploying the end result on GitHub.

#### Featured Code

**The `moveBurg` Function**

Of all the code solutions I uncovered in the process of completing this project, among the first to feel like a real success was the moveBurg function. This function was virtually complete by the end of Day 1, but as it was the first piece of interactivity to be implemented, it represented the moment where the game started taking shape.

```javascript
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
```

**The `areEqual` Function**

The other piece of code to stand out from my experience was the areEqual function, which takes two arrays of HTML elements (one representing the burger constructed by the player, the other representing the target for the level) as arguments and checking to see if their contents and order are identical. This function represented the landmark of solving the win condition, and ultimately tied the project together as a real, viable game.

```javascript
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
```

### Outcome

#### Challenges
* The greatest challenge I faced in developing “Hamburger Monarch” was trying to implement new burgers for the player to construct when progressing a level. This issue was never resolved, as there were persistent issues with the various arrays used to track the player’s progress not being properly reset which I was unable to correct in time for submission. As such, I had to relegate burger variety to a planned future addition and opted simply to increase the game speed each time the player succeeded.
* A significant amount of time was spent attempting to write the code for catching falling ingredients, and more still for trying to position the most recently caught ingredient at the top of the player’s current stack. This was the one point in development where I required external support, but talking it through with my tutor solidified a lot of concepts which ultimately made solving the rest of the game’s conditions significantly easier.

#### Victories
* Successfully implementing the movement for the player’s bun cursor within the first day was a significant win, not only because it was a significant requirement in getting the gameplay loop started, but because having some kind of interactivity by the end of the first day of development went a long way towards buoying my confidence in achieving the rest of my goals for the project.
* The single greatest victory for me was completing the project to such a standard that it almost perfectly reflected my vision from the planning stage. Some specific features didn’t make the final cut, such as new burgers to make for each level and the “Order Up!” button for confirming your burger, but compared to how much of the original plan went as intended, these are comparatively minor omissions.

#### Bugs
The only identified issue in the current iteration of the game is that the falling ingredients do not animate smoothly on every screen. Lower quality displays appear blurred and “stuttery”; a better means of animating them may be required to rectify this.

#### Future Inclusions and Improvements
* The first concept I intend to implement in future is my original plan of new, increasingly complex burgers for the player to make in higher levels.
* I would also replace the styled div elements used to represent burger ingredients with custom-made, more aesthetically-pleasing resources.
* I would like to explore alternative means of animating the falling ingredients to eliminate the poor appearance of the animation on lower quality displays.

#### Key Learnings
As my first project as part of General Assembly’s Software Engineering Immersive, it also represented the first time I was required to plan and develop a full application on a fixed deadline. My main takeaway from the experience was just how important it is to have a clear vision and firm plan for your work; I dread to think how much more difficult the experience would have been if I hadn’t solidified the concept as much before beginning to build the application.

The other major lesson gathered was one of personal discovery – Hamburger Monarch has served as a milestone in building my confidence, as it allowed me to demonstrate to myself that not only am I capable of planning and building an application which is (mostly) complete and fully functional, but I can do so on my own within the space of just a week.
