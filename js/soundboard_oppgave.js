//! Comment like this can be removed after finishing the tasks

//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here: */

//* If using json file: */
// fetch it through a function using a syntax like this:
/* async function fetchData() {
    const response = await fetch("path/to/file.json");
    const data = await response.json();
    return data;
}  */

//* If using js file: */
// import the file using a syntax like this:
/* import { sounds } from "./path/to/file.js"; */

//*1.1. Catch the html element with id drumkit: */
//! write code for part 1 here

//*1.1. Write a console log for the fetched sounds so you know how the structure is and how you can use it */

//! write code for part 1.1 here

//*2. Catch the html element with id drumkit: */

//! write code for part 2 here

//*2.1 console.log the drumkit element: */

//! write code for part 2.1 here

//*3. Finish the function below to create a functioning soundboard:: */

function drumComponent(sound) {
  //* 3.1. finish the buttenEl variable that should create a button element with .createElement

  const buttonEl = document;

  // add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed

  //3.2. make a variables that create an audio element with .createElement
  //the audio element that is created should have the src equal to the file source
  //the audio element that is created should have the id equal to the textcontent created in 3.1.

  //! add the audioEl.id here

  //*3.3. OPTIONAL. finish the eventlistner to the whole page (document) that should:
  //active when pressing a keyboard key (first parameter of the eventlistener)

  document.addEventListener("???", (event) => {
    // finish the key variable that refers to the key pressed
    const key = event;
    // make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
    if (key === "the key referanse in the data you are using") {
      // code for playing the audio element
    }
  });

  //* 3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
  //actives when releasing a keyboard key (first parameter of the eventlistener)
  document.addEventListener("???", (event) => {
    // code that pauses the audio element
    // code that sets the current time of the audio element to 0
  });

  //3.5. Create an eventlistener for clicking. OPTIONAL: Also create a logic for preventing more sounds to be played at the same time
  buttonEl.addEventListener("???", () => {
    // code that plays the audioEl
  });
  //3.6. append the created button and audio element to the html element you refered in 1.
  // code that appends the buttonEl and audioEl to the drumkit element
}

//*4. Create a function that loops over the sounds (from the data file you created). Use that function created in 3. to use the logic there to create the buttons. I prefer that you use .forEach or .map */
function createDrumKit() {
  // forEach logic that loops over each sound in the data you are using
  // each time the loops run it should call the drumComponent function
}

//*4.1 Call on the function that loops over the sounds and creates the buttons */
// call the function from part 4 here
