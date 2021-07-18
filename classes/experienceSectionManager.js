'use strict'

export default class experienceSectionManager {

    constructor(language) {
        this.language = language;
        this.setTittles();
    }

    setTittles() {
        // const tittlesContainer = document.getElementById('Projects-tittle');
        // const realProjectsTittles = document.getElementById('Real-projects-titles-container');

        // console.log(tittlesContainer);

        tittlesContainer.innerText = this.setSectionTittle();
        realProjectsTittles.innerHTML = this.setRealProjectsTittle();
        console.log(this.language)
        console.log(this.setRealProjectsTittle())

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


}