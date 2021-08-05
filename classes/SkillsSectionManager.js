
class skillsSectionManager{
    constructor(language) {
        this.language = language;

        this.setSkillsTitles();
    }

    setSkillsTitles(){

        //Tittles
        document.getElementById('Skills-tittle').innerText = this.setTittles().mainTittle;
        document.getElementById('Main-skills-tittle').innerText = this.setTittles().mainSkillsTittle;
        document.getElementById('Secondary-skills-title').innerText = this.setTittles().secondarySkillsTittle;

        //Explanation

        document.getElementById('Main-skills-explanation'). innerText = this.setExplanations().mainSkills;
        document.getElementById('Secondary-skills-explanation').innerText = this.setExplanations().secondarySkills;

    }

    setTittles(){
        switch(this.language){

            case 'english':
                return {
                    mainTittle : 'Skills',
                    mainSkillsTittle : 'Main Skills',
                    secondarySkillsTittle : 'Secondary Skills',
                }

            case 'spanish':
                return {
                    mainTittle : 'Habilidades',
                    mainSkillsTittle : 'Habilidades Principales',
                    secondarySkillsTittle : 'Habilidades secundarias',
                }

        }
    }

    setExplanations(){
        switch (this.language) {

            case 'english':
                return {
                    mainSkills :'These are the skills that I domain the most and have real experience with.',
                    secondarySkills : 'This are technologies I learned and used, but I don\'t consider that am skilled enough for a real and complex job.'
                }

            case 'spanish':
                return {
                    mainSkills : 'Estas son las habilidades que mejor domino y con las que tengo experienca real.',
                    secondarySkills: 'Estas son habilidades que he aprendido y utilizado, pero no considero que tenga el nivel para realizar trabjos complejos o en trabajos reales.'
                }
        }
    }

}

export default skillsSectionManager
