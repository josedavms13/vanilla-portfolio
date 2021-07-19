'use strict'

import practiceProjects from "./components/practiceProjects.js";

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
            projectList += this.setProjectCard(project.title, project.image, project.description, project.features, project.technologies)
        })
        /*
        let projectsSection = ``
           //forEach Project = (project)=>{
            projects += cardProjects(bla bla bla)

           }

        */


        document.getElementById('Project-cards-container').innerHTML = projectList;
    }


    setProjectCard(cardTitle, cardImage, cardDescription, cardFeatures, cardTechnologies, cardLink, cardGitHub ){
        let featuresTitle;
        let technologiesTitle;

        let featuresList = ``;
        let technologiesList = ``;

        console.log(cardTechnologies);
        console.log(Array.isArray(cardTechnologies.english));
        switch (this.language){
            case 'english':
                featuresTitle = 'Features';
                technologiesTitle = 'Technologies'
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


                console.log(technologiesList);
                console.log(featuresList);
                break
        }
        cardTechnologies.forEach((technology)=>{
            technologiesList += `<li>${technology}</li>`
        })


        return `
            <div class="project-card">
                <h3 class="project-title" id="Project-title">${cardTitle}</h3>
                <div class="image-container">
                    <img src="${cardImage}" alt="">
                </div>
                <p class="project-description">
                    ${cardDescription}
                </p>
                <div class="project-features" id="Project-features">
                    <h6 id="Features-title">${featuresTitle}</h6>
                    <ul class="project-features-list">
                        ${featuresList}
                    </ul>
                </div>

                <div class="project-technologies" id="Project-Technologies">
                    <h6 id="Technologies-title">${technologiesTitle}</h6>
                    <ul class="project-technologies-list">
                        ${technologiesList}
                    </ul>
                </div>
            </div>               
        `
    }
}