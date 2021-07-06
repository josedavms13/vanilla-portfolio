
export default

class languageManager {


   constructor(setLanguage){


      this.language = setLanguage;
      this.reactInvitation = {
         english : ``,

         spanish : ``
      }
      this.navbar = this.setNavbar();
      this.reactInvitation = this.setReactInvitation();
      
   }

   setReactInvitation(){
      switch (this.language){
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

   setNavbar(){
      switch (this.language){
         case 'spanish':
            // ------------- Spanish -----------------------
            return `
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Proyectos</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Habilidades</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Hoja de vida / CV</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Contacto</a></li>
            
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

   setWelcome(experience){
      switch (this.language){
         case 'english':
            document.querySelector('.welcome').innerHTML = `
                   <h1 id="Welcome-title">Welcome to my portfolio</h1>
                   <h3>My name is Jose David Esmoris and I am a frontend developer</h3>
                   <h4>I have ${experience} years of experience</h4>
                   <h4>and I'd like to be part of your team</h4>
            `
            break
         case 'spanish':
            document.querySelector('.welcome').innerHTML = `
                   <h1 id="Welcome-title">Bienvenid@ a mi portafolio</h1>
                   <h3>Yo soy Jose David Esmoris y soy un desarrollador frontend</h3>
                   <h4>Tengo ${experience} años de experiencia</h4>
                   <h4>y quisiera ser parte de tu equipo</h4>

            `
            break
      }
   }

   setExperienceTittles(){
      switch (this.language){
         case 'english':
            document.getElementById('Real-projects-title').innerText = `Real Projects`
            document.getElementById('Practice-projects-title').innerText = `Practice Projects`
            break
         case 'spanish':
            document.getElementById('Real-projects-title').innerText = `Proyectos reales`
            document.getElementById('Practice-projects-title').innerText = `Proyectos de Práctica`
            break
      }
   }


}
