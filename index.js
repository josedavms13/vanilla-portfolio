'use strict'
import languageManager from "./classes/languageManager.js";
import setHtmlText from "./utilities/setHtmlText.js"

//region GLOBAL VARIABLES
let LANGUAGE_STATE;


//endregion global variables


//region EVENT LISTENERS

//region language picker
const spanishButton = document.getElementById('Spanish-button');
const englishButton = document.getElementById('English-button');

spanishButton.addEventListener('click', () => languageManagement('spanish'))
englishButton.addEventListener('click', () => languageManagement('english'))
//endregion language picker

//region Input Fields
const userNameInputField = document.getElementById('Name-field');


//endregion Input Fields


//region react invitation

const reactButton = document.getElementById('React-button');
reactButton.addEventListener('React-button', () => shouldIStayOrShouldIGo('react'));

const vanillaButton = document.getElementById('Vanilla-button');
reactButton.addEventListener('Vanilla-button', () => shouldIStayOrShouldIGo('vanilla'));

//endregion react invitation


//endregion event Listeners

const languageSelection = document.getElementById("Language-selection");
const reactInvitation = document.getElementById("React-invitation-container");

const sectionClassSection = document.querySelector('.section')
//region language Management

function languageManagement(language) {

    LANGUAGE_STATE = new languageManager(language);

    //region show and hide
    document.querySelector('header').classList.remove('d-none');

    // Display react options
    languageSelection.classList.add('d-none');
    reactInvitation.classList.remove('d-none');
    //endregion show and hide


    //Invitation to React Portfolio
    setHtmlText('React-invitation-container', LANGUAGE_STATE.reactInvitation);

    //Navigation container
    setHtmlText('Nav-list-container', LANGUAGE_STATE.navbar);

    //welcome
    LANGUAGE_STATE.setWelcome()


    //Experience section
    LANGUAGE_STATE.setExperienceTittles();

}










//endregion language Management


//show welcome

function welcome() {
    const welcomePanel = document.getElementById('Welcome');
}
welcome();


const video = document.getElementById('Background-video')
document.addEventListener('scroll', (event)=> {
    const yOffset = window.pageYOffset/1000;
    video.style.setProperty('--video-position', yOffset)
});



// react invitation

function shouldIStayOrShouldIGo(technology) {

    document.getElementById('Experience-container').classList.remove('d-none')
    document.getElementById('Welcome').classList.remove('d-none')

    console.log('clicked')

    sectionClassSection.classList.remove('d-none');

    const panel = document.getElementById('React-invitation-container');

    switch (technology) {
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


//region Clock functions

const clockFunction = setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}


function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();

//endregion Clock functions


// Animations

const clock = document.getElementById('Clock-container');

let hoverInTL = gsap.timeline();
let CLOCK_OPEN = false;

function clockAmp() {
    CLOCK_OPEN = !CLOCK_OPEN;
    if (CLOCK_OPEN) {
        hoverInTL.play();
    } else {
        hoverInTL.reverse();
    }
}

hoverInTL.pause();

hoverInTL.to('#Clock', {
    position: 'absolute',
    duration: 1,
    top: '50%',
    left: '15vw',
    height: '80vw',
    width: '80vw',
})
    .to('.number', {
        duration: 0.5,
        opacity: 1,
        delay: 0.1,
        ease: 'power4.inOut',
    })
    .from('.hand', {
        width: 4,
        background: 'white',
        opacity: 1,
        duration: 0.5,

    }, '.analog-watch .hand.second',{
        opacity : 1,
    })

clock.addEventListener('click', clockAmp)


//DOM functions
window.shouldIStayOrShouldIGo = shouldIStayOrShouldIGo

//test export

export default languageManager