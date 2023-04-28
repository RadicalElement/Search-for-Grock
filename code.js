//****************************************************************************************************
//****************************************************************************************************
//         
//             OOOOOOOOOOOOOOOOOOOOOOOOOOOO
//            OOOOOOOOOOOOOOOOOOOOOOOOOOOO
//           OO  
//          OO 
//         OO
//  OO    OO 
//   OO  OO 
//      OO
//
//The Search for Grock
//Grock is a term from Stranger in a Strange Land by Robert Heinland
//A text-based game developed and published by Radical Element
//The scope of this game is to illistrate the array length property and the push and pop array methods
//
//****************************************************************************************************
//****************************************************************************************************


//declare the variables that will contain our arrays
let aryItems;
let aryGameItems;
let aryGameTxt;

//the variable that will hold the current game state
let state;

//variable to access the attributes of the text div, where the game text is displayed
let text;

function init(){
  //initialize an empty array, this is the players inventory
  aryItems = [];
  console.log("The player possess a total of " +  aryItems.length + " items.");
  //assigns all the items found in the game
  aryGameItems = ["sword","ration","saddle","magic sword","potion","Grock"];
  console.log("Total items in the game to collect: " + aryGameItems.length);
  //assigns the text the player will read
  aryGameTxt = ["The king presents to you a " + aryGameItems[0] + " for your quest", "To prepare for your journey, the cook provides a " + aryGameItems[1] + "","You retreive your " + aryGameItems[2] + " from your room in the castle","You place the " + aryGameItems[2] + " upon your might steed","You claim the " + aryGameItems[3] + " from the lady of the lake","The wizard of the Sky Tower gives you a " + aryGameItems[4] + " to revitalize you of any injury you suffer on your quest.","You drink the potion after you battle the fire-breathing dragon (All the best stories have a dragon!)","You claim the " + aryGameItems[5]," You present grock to the king.  The End."];
  console.log("Total text items to display: " + aryGameTxt.length);
 
  //assign the first element of the aryGameTxt to the game textarea in the index html file
  showSplashscreen();
  hideGamePanel();
}

//set the game state variable to 1, add formatting to the game text div container, and fires initStory function
function start(){
  hideSplashscreen();
  text =  document.getElementById('text');
  text.style.backgroundColor = "blue";
  text.style.height = '100px';
  text.style.color = 'yellow';
  state = 1;
  console.log("The game state is: " + state);

  initStory();
}

//called in the start function, displays the first element to the player
function initStory(){
  txtBxItem.value = aryGameItems[0];
  text.innerHTML = aryGameTxt[0];
}

function startGame(){
  hideSplashscreen();
  showGamePanel();
  start();
}

//function that adds an element to the end of the array
function addInventory() {
  let item = txtBxItem.value;
  console.log("Item to add: " + item);
  aryItems.push(item);
  console.log("The number of items in you inventory: " + aryItems.length);
}

//function that removes the element from the end of the array
function removeInventory() {
  let item = txtBxItem.value;
  console.log("Item to drop: " + item);
  if(txtBxItem.value == aryItems[aryItems.length - 1]){
    aryItems.pop(item);
  } else {
    state = state - 1;
    hndlGameState();
    alert("You do not possess that item");
    text.innerHTML = aryGameTxt[state - 1];
  }
  console.log("The number of items in you inventory: " + aryItems.length);
}

//dispalys the game text to the player depending on the value of the game state variable
function hndlGameState() {
  switch(state) {
    case 2:
      text.innerHTML = aryGameTxt[1];
      txtBxItem.value = aryGameItems[1];
      break;
    case 3:
      text.innerHTML = aryGameTxt[2];
      txtBxItem.value = aryGameItems[2];
      break;
    case 4:
      text.innerHTML = aryGameTxt[3];
      txtBxItem.value = aryGameItems[2];
      break;
    case 5:
      text.innerHTML = aryGameTxt[4];
      txtBxItem.value = aryGameItems[3];
      break;
    case 6:
      text.innerHTML = aryGameTxt[5];
      txtBxItem.value = aryGameItems[4];
      break;
    case 7:
      text.innerHTML = aryGameTxt[6];
      txtBxItem.value = aryGameItems[4];
      break;
    case 8:
      text.innerHTML = aryGameTxt[7];
      txtBxItem.value = aryGameItems[5];
      break;
    case 9:
      text.innerHTML = aryGameTxt[8];
      txtBxItem.value = aryGameItems[5];
      break;
    case 10:
      text.innerHTML = aryGameTxt[9];
      txtBxItem.value = aryGameItems[5];
      break;
    default:
       alert('Nothing to tell');
       break;
  }
}


//function that determines which button was clicked
function btnClickHndle(){
  console.log("The button clicked is: " + event.target.id);
  if (event.target.id == 'btnAdd'){
    addInventory();
  } else {
    removeInventory();
  }

  //advance the game state variable by 1
  state = state +1;
  console.log("The game state is: " + state);

  //remove the text from the item text box
  txtBxItem.value = "";
 
  //determine what text to display based on game state variable
  hndlGameState();

  
  if (state == 10){
    hideGamePanel();
    showSplashscreen();
  }
}


//The functions that shows or hides the game panel and splashscreen
function hideSplashscreen(){
  document.getElementById('splashscreen').style.visibility = 'hidden';
}

function hideGamePanel(){
  document.getElementById('gamePanel').style.visibility = 'hidden';
}

function showSplashscreen(){
  document.getElementById('splashscreen').style.visibility = 'visible';
}

function showGamePanel(){
  document.getElementById('gamePanel').style.visibility = 'visible';
}





