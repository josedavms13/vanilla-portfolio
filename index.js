'use strict'
import languageManager from "./classes/LanguageManager.js";
import setHtmlText from "./utilities/setHtmlText.js"

import pickRandomProjectOnSkill from "./utilities/pickRandomProjectOnSkill.js";
import unIdleServer from "./services/unIdleServer.js";
import getOpinions from "./services/getOpinions.js";
import setComments from "./modules/setComments.js";

//region GLOBAL VARIABLES
let LANGUAGE_STATE;
let SERVER_RESPONDED;

//endregion global variables


//region Welcome section  event listeners

//region language picker
const spanishButton = document.getElementById('Spanish-button');
const englishButton = document.getElementById('English-button');

spanishButton.addEventListener('click', () => reloadServerBeforeLanguage('spanish'))
englishButton.addEventListener('click', () => reloadServerBeforeLanguage('english'))
//endregion language picker


//region react invitation

const reactButton = document.getElementById('React-button');
reactButton.addEventListener('React-button', () => shouldIStayOrShouldIGo('react'));

const vanillaButton = document.getElementById('Vanilla-button');
vanillaButton.addEventListener('Vanilla-button', () => shouldIStayOrShouldIGo('vanilla'));

//endregion react invitation


//endregion event Listeners


//region Document Elements

//Independent Components
const spinnerLoaderClassList = document.getElementById('Spinner-loader').classList;
const messageSendingResults = document.getElementById('Message-sending-response');

//Sections
const welcomeSection = document.getElementById('Welcome');

const languageSelection = document.getElementById("Language-selection");
const reactInvitation = document.getElementById("React-invitation-container");

const experienceSection = document.getElementById('Experience-container');

const commentSection = document.getElementById("Opinion-section");
const commentAsking = document.getElementById("Comment-asking");
const commentPostContainer = document.getElementById('Opinion-post-container');


const skillsSection = document.getElementById('Skills-container')

const contactSection = document.getElementById('Contact-section');


const sectionClassSection = document.querySelector('.section')

//endregion Document Elements


//region APP LANGUAGE MANAGEMENT


function reloadServerBeforeLanguage(language) {

    languageManagement(language);

    unIdleServer()
        .then(res => {
            if (res.status === 200) {
                SERVER_RESPONDED = true;
                commentSection.classList.remove('d-none')
                setSectionsYPosition();
            }
        })
        .catch(() => {
            SERVER_RESPONDED = false;
        })
}


function languageManagement(language) {

    //region show and hide
    document.querySelector('header').classList.remove('d-none');

    // Display react options
    languageSelection.classList.add('d-none');
    reactInvitation.classList.remove('d-none');


    //endregion show and hide

    LANGUAGE_STATE = new languageManager(language);


    //Invitation to React Portfolio
    setHtmlText('React-invitation-container', LANGUAGE_STATE.reactInvitation);

    //Navigation container
    setHtmlText('Nav-list-container', LANGUAGE_STATE.navbar);

    //welcome
    LANGUAGE_STATE.setWelcome()

    //Set Navbar Label
    navbarLabel.innerText = LANGUAGE_STATE.navbarSections.home;

    //Set Comment section
    commentAsking.innerHTML = LANGUAGE_STATE.setCommentSection().question;

    //Show comment section
    if (SERVER_RESPONDED) {
        document.getElementById('Comments-title').innerText = LANGUAGE_STATE.setCommentSection().title;
    }


    //region REACT PORTFOLIO BYPASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    shouldIStayOrShouldIGo('vanilla');
    //endregion REACT PORTFOLIO BYPASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    setSectionsYPosition();
}


//endregion language Management


//region Play Video
const video = document.getElementById('Background-video');
video.addEventListener('canplay', (e) => isReadyToPlay(e));

function isReadyToPlay() {

    video.play();

}


//endregion Play Video


//region Clock functions

setInterval(setClock, 1000)

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

    }, '.analog-watch .hand.second', {
        opacity: 1,
    })

clock.addEventListener('click', clockAmp)
//endregion Clock Animations


//region React invitation
function shouldIStayOrShouldIGo(technology) {

    experienceSection.classList.remove('d-none');
    welcomeSection.classList.remove('d-none');


    //Display skills section
    skillsSection.classList.remove('d-none');

    //Display contact section
    contactSection.classList.remove('d-none');


    sectionClassSection.classList.remove('d-none');

    const panel = document.getElementById('React-invitation-container');

    switch (technology) {
        case 'react':
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

const homePosition = 298;
const experiencePosition = 394;

let skillsPosition;
let commentPosition;
let contactPosition;

function setSectionsYPosition() {

    const yOffset = -150;



    commentPosition = commentSection.offsetTop + yOffset;
    skillsPosition = skillsSection.offsetTop + yOffset;
    contactPosition = contactSection.offsetTop + yOffset;

}


const navbarLabel = document.getElementById('Navbar-label');

let windowOffset;
document.addEventListener('scroll', () => {

    windowOffset = window.pageYOffset;

   switch (true){

       case windowOffset < homePosition:

           navbarLabel.innerText = LANGUAGE_STATE.navbarSections.home;


           break

       case windowOffset > experiencePosition && windowOffset < commentPosition:

           navbarLabel.innerText = LANGUAGE_STATE.navbarSections.experience;

           break

       case SERVER_RESPONDED && windowOffset > commentPosition && windowOffset < skillsPosition:


           navbarLabel.innerText = LANGUAGE_STATE.navbarSections.comments;

           break

       case windowOffset > skillsPosition && windowOffset < contactPosition:

           navbarLabel.innerText = LANGUAGE_STATE.navbarSections.skills;


           break

       case windowOffset > contactPosition:

           navbarLabel.innerText = LANGUAGE_STATE.navbarSections.contact;
           break




   }



})
//endregion navbar label


//region Comments section

function askAndShowComments() {



    getOpinions()
        .then(res => res.json())
        .then(data => {
            showComments(data);
            setSectionsYPosition();
        });



}

function showComments(data) {

    //Hide comment question
    commentAsking.classList.add('d-none');

    //Generate comments cards
    const commentCardInfo = setComments(data, LANGUAGE_STATE.setCommentSection().labels);

    //Show posted comments
    commentPostContainer.classList.remove('d-none')
    document.getElementById('All-post-dynamic-container').innerHTML = commentCardInfo
}


//endregion Comments section


//region Contact Section Management


//endregion Contact Section Management


//region Skills Icons click Manager

document.getElementById('Javascript-skill').addEventListener('click', () => {
    document.getElementById('Native-JS-link').setAttribute('href', `#${pickRandomProjectOnSkill('javaScript')}`)
})

document.getElementById('Html-skill').addEventListener('click', () => {
    document.getElementById('Html-link').setAttribute('href', `#${pickRandomProjectOnSkill('html')}`)
})

document.getElementById('Css-skill').addEventListener('click', () => {
    document.getElementById('CSS-link').setAttribute('href', `#${pickRandomProjectOnSkill('css')}`)
})

document.getElementById('React-skill').addEventListener('click', () => {
    document.getElementById('React-link').setAttribute('href', `#${pickRandomProjectOnSkill('react')}`)
})

document.getElementById('Redux-skill').addEventListener('click', () => {
    document.getElementById('Redux-link').setAttribute('href', `#${pickRandomProjectOnSkill('redux')}`)
})


//endregion Skills Icons click Manager


//region Contact Section

//region sending contact info
const btn = document.getElementById('Submit-button');

const messageContainer = document.getElementById('Message-sending-response-titles-container');
document.getElementById('Contact-form')
    .addEventListener('submit', function (event) {
        messageContainer.innerHTML = LANGUAGE_STATE.contactManager.setMessageResponse('success');
        messageResult();

        spinnerLoaderClassList.remove('d-none');
        event.preventDefault();

        btn.value = LANGUAGE_STATE.contactManager.sendButtonLabels.sending;

        const serviceID = 'default_service';
        const templateID = 'template_sccvwka';




        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                //success
                document.getElementById('from_name').value = '';
                document.getElementById('message').value = '';
                document.getElementById('from_email').value = '';
                document.getElementById('Submit-button').value = LANGUAGE_STATE.contactManager.sendButtonLabels.send;

                spinnerLoaderClassList.add('d-none');

                messageContainer.innerHTML = LANGUAGE_STATE.contactManager.setMessageResponse('success');
                messageResult();

            })
            .catch(() => {
                //fail
                messageContainer.innerHTML = LANGUAGE_STATE.contactManager.setMessageResponse('fail');
                spinnerLoaderClassList.add('d-none');


            });
    });

//endregion sending contact info


function messageResult() {
    messageSendingResults.classList.remove('d-none');
    setTimeout(() => {
        messageSendingResults.classList.add('d-none');
    }, 1300)

}



//endregion contact section


//region DOM functions
window.shouldIStayOrShouldIGo = shouldIStayOrShouldIGo;

window.askAndShowComments = askAndShowComments;
// window
//endregion DOM functions
