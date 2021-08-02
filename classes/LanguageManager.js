'use strict'
import experienceSectionManager from "./ExperienceSectionManager.js";
import skillsSectionManager from "./SkillsSectionManager.js";
import contactSectionManager from "./ContactSectionManager.js";

export default class languageManager {

    constructor(setLanguage) {

        // Elements to be used in index.js
        this.language = setLanguage;
        this.reactInvitation = {
            english: ``,

            spanish: ``
        }
        this.navbar = this.setNavbar();
        this.navbatSections = this.setNavbarSections();
        this.reactInvitation = this.setReactInvitation();

        this.experienceManager = new experienceSectionManager(this.language);
        this.skillsManager = new skillsSectionManager(this.language);
        this.contactManager = new contactSectionManager(this.language)
    }

    setReactInvitation() {
        switch (this.language) {
            case 'english':
                return `
         <h4>Please consider to see my built in react portfolio</h4>
               <button onclick="shouldIStayOrShouldIGo('react')" id="React-button" class="react-button"> Take me to react website</button>
               <button onclick="shouldIStayOrShouldIGo()" id="Vanilla-button" class="vanilla-button">Stay here in vanilla version</button>
            `

            case 'spanish':
                return `
               <h4>Porfavor  considera ver mi portafolio en React</h4>
               <button onclick="shouldIStayOrShouldIGo('react')" id="React-button" class="react-button"> Muestrame el portafolio de React</button>
               <button onclick="shouldIStayOrShouldIGo()" id="Vanilla-button" class="vanilla-button">Dejame aquí en la version vanilla</button>
            `

        }
    }

    setNavbar() {
        switch (this.language) {
            case 'spanish':
                // ------------- Spanish -----------------------
                return `
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#Welcome">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#Real-projects-titles-container">Proyectos</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#Skills-container">Habilidades</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Hoja de vida / CV</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#Contact-section">Contacto</a></li>
            
            `
            // ------------- English ----------------------

            case 'english':
                return `
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Projects</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Skills</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">CV</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Contact</a></li>
            
            `

        }
    }

    setNavbarSections(){
        switch (this.language){
            case 'english':
                return {
                    home: 'Home',
                    experience : 'Experience',
                    skills : 'Skills',
                    contact : 'Contact'
                }

            case 'spanish':
                return{
                    home: 'Inicio',
                    experience: 'Experiencia',
                    skills: 'Habilidades',
                    contact: 'Contacto'
                }
        }
    }

    setWelcome(yearsOfExperience) {
        switch (this.language) {
            case 'english':
                document.querySelector('.welcome').innerHTML = `
                   <h1 id="Welcome-title">Welcome to my portfolio</h1>       
                    <div class="welcome-description">
                      <p>My name is Jose David Esmoris</p>
                      <p>I am a frontend developer</p>
                      <p>I have ${yearsOfExperience} years of experience</p>
                      <p>and I'd like to be part of your team</p>
                   </div>

            `
                break
            case 'spanish':
                document.querySelector('.welcome').innerHTML = `
                   <h1 id="Welcome-title">Bienvenid@ a mi portafolio</h1>
                   <div class="welcome-description">
                      <p>Yo soy Jose David Esmoris,</p>
                       <p>soy desarrollador frontend</p>
                      <p>Tengo ${yearsOfExperience} años de experiencia</p>
                      <p>y quisiera ser parte de tu equipo</p>
                      
                  </div>
                   

            `
                break
        }
    }

    setCommentSection(){

        switch (this.language){

            case 'english':
                return {
                    title: 'Comments',
                    question :
                        `
                        <h2>Do you want to see some comments from people who know me?</h2>
                        <div class="yes-no-question">
                            <button type="button" class="btn btn-primary" onclick="showComments()">Yes please!</button>
                        </div>
                        `,
                    labels : {
                        author : 'Name',
                        position : 'Actual Position',
                        relation : 'Relationship with me',
                        country : 'Country',
                        comment : 'Comment',
                        rate: 'Rate'
                    }
        }

            case 'spanish':
                return {
                    title: 'Comentarios',
                    question :
                        `
                        <h2>¿Quieres ver algunos comentarios de la gente que me conoce?</h2>
                        <div class="yes-no-question">
                            <button type="button" class="btn btn-primary" onclick="showComments()">Vale!</button>
                        </div>
                        `,
                    labels : {
                        author : 'Nombre',
                        position : 'Posición Actual',
                        relation : 'Relacion con respecto a mi',
                        country : 'País',
                        comment : 'Comentario',
                        rate: 'Evaluación'
                    }
        }
                }

    }


}
