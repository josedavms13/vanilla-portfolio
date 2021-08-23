const practiceProjects = [{
    id: 0,
    title: "Pokedex",
    image: "https://d33wubrfki0l68.cloudfront.net/60bc00726deb9543316ad4c5/screenshot_2021-06-05-22-54-45-0000.png",
    description: {
        english: "It is a pokedex that made in React. It has 3 different searching options (type, ability and name), with filters to help and guide the user on the search. Includes a register and login system.",
        spanish: "Es una pokedex hecha en React. Tiene 3 formas diferentes de búsqueda (tipo, habilidad y nombre), con filtros para ayudar y guiar al usuario en su búsqueda. Incluye un sistema de registro e ingreso."
    },
    features: {
        english: ["React pagination", "Session (Register / Login)", "Routes", "Protected Routes", "API consuming, CSS animations"],
        spanish: ["Paginación en React", "Sistema de registro e ingreso", "Sistema de Rutas en React", "Uso de rutas protegidas", "Consumo de API", "Animaciones en CSS"]
    },
    technologies: ["HTML", "CSS", "ReactJS"],
    links: {
        gitHub: "https://github.com/josedavms13/Pokedex.git",
        webPage: 'https://condescending-kepler-3ca690.netlify.app'
    }
}, {
    id : 1,
    title: "App Trivia",
    image: "https://d33wubrfki0l68.cloudfront.net/6091d47b1bf6df0008134a24/screenshot_2021-05-04-23-10-58-0000.png",
    description: {
        english: "This is a Trivia game made in pure HTML, CSS and JavaScript. It has two game modes. The first one has 3 different difficulty levels, the player starts in lvl 1 (easy) and the level increase dependeing on how well answers the questions. The higher the level you are the more points you earn. Finally the score is saved on local storage. The second gamemode doesn't have score but you can filter the questions.",
        spanish: "Este es un juego de trivia hecho en HTML, CSS y JavaScript puro. Tiene dos modos de juego. El primero tiene 3 diferentes dificultades, el jugador comienza en nivel 1 (fácil) y va subiendo de nivel según vaya contestando las preguntas correctamente. Cuanto mayor sea el nivel del jugador mas puntos acumula. Finalmente el puntaje se guarda en el local storage. El segundo modo de juego no tiene puntage pero te permite filtrar las preguntas."
    },
    features: {
        english: ["Original and Dynamic Music", "leveling system", "Filter based API consuming"],
        spanish: ["Musica dinámica y original", "Sistema de niveles", "Sistema de filtrado para la búsqueda en la API"]
    },
    technologies: ["HTML", "CSS", "JavasScript"],
    links: {
        gitHub: "https://github.com/josedavms13/AppTrivia2ReMasterNoFake.git",
        webPage: 'https://nostalgic-thompson-563f7b.netlify.app/'
    }
}, {
    id : 2,
    title: "Rick and Morty",
    image: "https://d33wubrfki0l68.cloudfront.net/60a5cf39cd7de77afd83c33a/screenshot_2021-05-20-02-54-58-0000.png",
    description: {
        english: "This is a page that simulates an app inside of Rick and Morty's universe. You can search someone by name or by location. If you chose to search by name, it will show that character at the beginning of chapter 3 season 1. Then will show a message depending if is alive or dead and how long could hi/she/it will live. Also, you can search by location, and this allows to search a specific locaction and specific dimention by adding '*-' symbols in the search",
        spanish: "Es una página que simula ser una app en el universo de Rick and Morty. Puedes buscar por nombre o por locación. Si decides buscar por nombre, va a mostrar ese personaje como si fuera el comienzo del capítulo 3 de la temprada 1. Y mostrará un mensaje dependiendo si el personaje está vivo o muerto, y si vive, muestra un mensaje dependiendo de cuanto tiempo vaya a vivir. Además puedes buscar por locación, y ademas permite buscar una locación en una dimension especifica añadiendo los simbolos '*-'"
    },
    features: {
        english: ["Consuming 2 different APIs simultanely ", "Info display a result of a mix of those two APIs data"],
        spanish: ["Consumo de dos APIs simultáneamente", "Se muestra el resultado del producto de comparar los datos entre las dos apis"]
    },
    technologies: ["ReactJS"],
    links: {
        gitHub: "https://github.com/josedavms13/rickAndMorty.git",
        webPage: 'https://elated-davinci-c49982.netlify.app/'
    }
}, {
    id : 3,
    title: "Online TO-DO",
    image: "https://d33wubrfki0l68.cloudfront.net/60ad56fb9b7e5300071ab544/screenshot_2021-05-25-19-59-17-0000.png",
    description: {
        english: "It is a TO DO app in which user can create, update, and delete tasks. User also can add a person to a list and assign a task to someone in the list",
        spanish: "Es una TO DO app en la que el usuario puede crear, actualizar y borrar tareas. Además también puede añadir a alguien a una lista de personas y asignar la tarea a alguna de las personas en la lista"
    },
    features: {
        english: ["ReactJS CRUD", "CRUD in API"],
        spanish: ["CRUD en ReactJS", "Aplicación de CRUD en la API"]
    },
    technologies: ["ReactJS", "CSS"],
    links: {
        gitHub: "https://github.com/josedavms13/http-crud.git",
        webPage: 'https://flamboyant-hopper-b5a28a.netlify.app/'
    }
},
    {
    template: true,
    id : 1,
    title: "--",
    image: "--",
    description: {
        english: "--",
        spanish: "--"
    },
    features: {
        english: ["--"],
        spanish: ["--"]
    },
    technologies: ["--"],
    links: {
        gitHub: "--",
        webPage: '--'
    }
}]

export default practiceProjects