'use strict'
import languageManager from "./classes/languageManager.js";
import setHtmlText from "./utilities/setHtmlText.js"

//region GLOBAL VARIABLES
let LANGUAGE_STATE;
let USER_NAME;


//endregion global variables


//region EVENT LISTENERS

//region language picker
const spanishButton = document.getElementById('Spanish-button');
const englishButton = document.getElementById('English-button');

spanishButton.addEventListener('click', ()=>languageManagement('spanish'))
englishButton.addEventListener('click', ()=>languageManagement('english'))
//endregion language picker

//region Input Fields
const userNameInputField = document.getElementById('Name-field');



//endregion Input Fields


//region react invitation

const reactButton = document.getElementById('React-button');
reactButton.addEventListener('React-button', ()=>shouldIStayOrShouldIGo('react'));

const vanillaButton = document.getElementById('Vanilla-button');
reactButton.addEventListener('Vanilla-button', ()=>shouldIStayOrShouldIGo('vanilla'));

//endregion react invitation


//endregion event Listeners

//region language Management

function languageManagement(language){
    LANGUAGE_STATE =  new languageManager(language);
    //Invitation to React Portfolio
    setHtmlText('React-invitation-container', LANGUAGE_STATE.reactInvitation);

    //Navigation container
    setHtmlText('Nav-list-container', LANGUAGE_STATE.navbar);
    document.querySelector('header').classList.remove('d-none');

    setUserName(USER_NAME);

    // Display react options
    document.getElementById("React-invitation-container").classList.remove('d-none');
    document.getElementById("Language-selection").classList.add('d-none');

}


//endregion language Management









//show welcome

function welcome(){
    const welcomePanel = document.getElementById('Welcome');


}

welcome();

// user input name
function setUserName(){

    USER_NAME = userNameInputField.value;

    console.log(USER_NAME);

}

// react invitation

function shouldIStayOrShouldIGo(technology){

    console.log('clicked')

    const panel = document.getElementById('React-invitation-container');

    switch(technology){
        case 'react':
            console.log('to react portfolio');
            break

        case 'vanilla':
            panel.classList.add('d-none');
            break

        default:
            panel.classList.add('d-none');
            break
    }




}





//Clock functions

setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() /60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}


function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();

//DOM functions
window.shouldIStayOrShouldIGo = shouldIStayOrShouldIGo

//test export

export default languageManager