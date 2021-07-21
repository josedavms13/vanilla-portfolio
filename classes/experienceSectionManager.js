'use strict'

import practiceProjects from "./components/db/practiceProjects.js";

export default class experienceSectionManager {

    constructor(language) {

        this.language = language;
        this.practiceProjects = practiceProjects;
        this.setTittles();
        this.setPracticeProjects();


        console.log(this.practiceProjects);
    }

    setTittles() {
        const tittlesContainer = document.getElementById('Projects-tittle');

        // region Real projects
        // const realProjectsTittles = document.getElementById('Real-projects-titles-container');
        // realProjectsTittles.innerHTML = this.setRealProjectsTittle();
        // endregion Real projects

        // region Practice Projects




        // endregion Practice Projects

        console.log(tittlesContainer);

        tittlesContainer.innerText = this.setSectionTittle();
        console.log(this.language)
    }

    setSectionTittle(){
        switch (this.language){
            case 'english':
                return 'Projects'
            case 'spanish':
                return 'Proyectos'
        }
    }

    setRealProjectsTittle() {
        switch (this.language) {
            case 'english':
                return (
                    `        
                <div class="real-projects-title">
                    <h2 id="Real-projects-title"> Real projects</h2>
                    <div class="real-projects-disclaimer">
                        <h6>Disclaimer:</h6>
                        <p class="disclaimer-p"> This are Demo samples of the real projects.</p>
                        <p class="disclaimer-p">Some costumers didn't allow me to share the products I made for them</p>
                    
                    </div>
                </div>
                `)

            case 'spanish':
                return (
                    `
                <div class="real-projects-title">
                    <h2 id="Real-projects-title"> Proyectos reales</h2>
                    <div class="real-projects-disclaimer">
                        <h6>Aviso! :</h6>
                        <p class="disclaimer-p"> Estas son muestras demo de los proyectos reales. </p>
                        <p class="disclaimer-p">Algunos clientes no me permiten mostrar los proyectos que realice para ellos </p>
                    </div>
                </div>
`)

        }
    }

    setPracticeProjects(){

        let projectList = ``;

        this.practiceProjects.forEach((project)=>{
            if(!project.template) {
                projectList += this.setProjectCard( project.id ,project.title, project.image, project.description, project.features, project.technologies, project.links)
            }
        })

        document.getElementById('Project-cards-container').innerHTML = projectList;
    }


    setProjectCard(cardID, cardTitle, cardImage, cardDescription, cardFeatures, cardTechnologies, cardLinks){
        let featuresTitle;
        let technologiesTitle;

        let featuresList = ``;
        let technologiesList = ``;

        let description;

        console.log(cardTechnologies);
        console.log(Array.isArray(cardTechnologies.english));
        switch (this.language){
            case 'english':
                featuresTitle = 'Features';
                technologiesTitle = 'Technologies';
                description = cardDescription.english
                cardFeatures.english.forEach((feature)=>{
                    featuresList += `<li>${feature}</li>`
                })
                break

            case 'spanish':
                featuresTitle = 'Características';
                technologiesTitle = 'Tecnologías';

                cardFeatures.spanish.forEach((feature)=>{
                    featuresList += `<li>${feature}</li>`
                })

                description = cardDescription.spanish

                console.log(technologiesList);
                console.log(featuresList);
                break
        }
        cardTechnologies.forEach((technology)=>{
            technologiesList += `<li>${technology}</li>`
        })


        console.log(cardDescription);

        return `
            <div class="project-card" id="Practice${cardID}">
                <h3 class="project-title" id="Project-title">${cardTitle}</h3>
                <div class="image-container">
                    <a href="${cardLinks.webPage}" target="_blank">
                        <img src="${cardImage}" alt="card_image">
                    </a>
                </div>
                
                <p class="project-description">
                    ${description}
                </p>
                <div class="features-and-tech-container">
                    <div class="project-features group-container-characteristics" id="Project-features">
                        <h6 id="Features-title">${featuresTitle}</h6>
                        <div class="project-features-list">
                            ${featuresList}
                        </div>
                    </div>
                    <div class="project-technologies" id="Project-Technologies">
                        <h6 id="Technologies-title">${technologiesTitle}</h6>
                        <div class="project-technologies-list">
                            ${technologiesList}
                        </div>
                    </div>
                </div>
                <div class="links">
                    <div class="gitHub-link link-container">
                        <a href="${cardLinks.gitHub}" target="_blank">
                            <i class="fab fa-github" ></i>
                        </a>
                    </div>                    
                    <div class="webpage-link link-container">
                        <a href="${cardLinks.webPage}" target="_blank" >
                            <i class="fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>               
        `
    }
}