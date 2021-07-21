'use strict'
import languageManager from "./classes/languageManager.js";
import setHtmlText from "./utilities/setHtmlText.js"
import emailSubmit from "./services/emailSubmit.js";
import pickRandomProjectOnSkill from "./utilities/pickRandomProjectOnSkill.js";

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

//region APP LANGUAGE MANAGEMENT
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


    //Set Navbar Label
    navbarLabel.innerText = LANGUAGE_STATE.navbatSections.home;





}


//endregion language Management


//region Play Video
const video = document.getElementById('Background-video');
video.addEventListener('canplay', playVideo);

async function playVideo(){
    try{
        await setTimeout(()=>{
            video.play();
            console.log('playing video')
            },5000);
        await showThings();

    }catch {
        await playVideo();
    }

}
function showThings(){
    console.log('showing');
}
playVideo()
    .then(null);

//endregion Play Video


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


//region Clock Animations

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
//endregion Clock Animations


//region React invitation
function shouldIStayOrShouldIGo(technology) {

    document.getElementById('Experience-container').classList.remove('d-none');
    document.getElementById('Welcome').classList.remove('d-none');


    //skills
    document.getElementById('Skills-container').classList.remove('d-none');

    //contact
    document.getElementById('Contact-section').classList.remove('d-none');



    // console.log('clicked')

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
//endregion react invitation


//region Navbar label
const navbarLabel = document.getElementById('Navbar-label');

let windowOffset;
document.addEventListener('scroll', ()=>{
    windowOffset= window.pageYOffset;
    console.log(windowOffset);

    if(windowOffset < 270){
        navbarLabel.innerText = LANGUAGE_STATE.navbatSections.home;
        console.log('home');

    }

    if(windowOffset > 400){
        navbarLabel.innerText = LANGUAGE_STATE.navbatSections.experience;
        console.log('experience');
    }

    if(windowOffset > 4800){
        navbarLabel.innerText = LANGUAGE_STATE.navbatSections.skills;
        console.log('experience');
    }
    if(windowOffset > 6100){
        navbarLabel.innerText = LANGUAGE_STATE.navbatSections.contact;
        console.log('experience');
    }
})
//endregion navbar label


//region Contact Section Management



//endregion Contact Section Management


//region Skills Icons click Manager

document.getElementById('Javascript-skill').addEventListener('click',()=>{
    document.getElementById('Native-JS-link').setAttribute('href',`#${pickRandomProjectOnSkill('javaScript')}`)
})

document.getElementById('Html-skill').addEventListener('click',()=>{
    document.getElementById('Html-link').setAttribute('href',`#${pickRandomProjectOnSkill('html')}`)
})

document.getElementById('Css-skill').addEventListener('click',()=>{
    document.getElementById('CSS-link').setAttribute('href',`#${pickRandomProjectOnSkill('javaScript')}`)
})

document.getElementById('React-skill').addEventListener('click',()=>{
    document.getElementById('React-link').setAttribute('href',`#${pickRandomProjectOnSkill('javaScript')}`)
})

document.getElementById('Redux-skill').addEventListener('click',()=>{
    document.getElementById('Redux-link').setAttribute('href',`#${pickRandomProjectOnSkill('javaScript')}`)
})






//endregion Skills Icons click Manager



//region sending contact info

const btn = document.getElementById('Submit-button');


document.getElementById('Contact-form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = LANGUAGE_STATE.contactManager.sendButtonLabels.sending;

        const serviceID = 'default_service';
        const templateID = 'template_sccvwka';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              //success
                document.getElementById('from_name').value= '';
                document.getElementById('message').value= '';
                document.getElementById('from_email').value = '';
                document.getElementById('Submit-button').value=  LANGUAGE_STATE.contactManager.sendButtonLabels.send;


            }, (err) => {
                //fail
            });
    });
//endregion sending contact info



//region DOM functions
window.shouldIStayOrShouldIGo = shouldIStayOrShouldIGo;
// window
//endregion DOM functions
