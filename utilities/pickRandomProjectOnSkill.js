function pickRandomProjectOnSkill(skill){

    const javaScriptSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3'];
    const htmlSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3', "Practice4"];
    const cssSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3', "Practice4"];
    const reactSkill = ['Practice0', 'Practice2', 'Practice3'];
    const redux = [''];

    let pick;
    switch (skill){
        case 'javaScript':
            pick = Math.floor(Math.random()*javaScriptSkill.length);

            return javaScriptSkill[pick]

        case 'html':
            pick = Math.floor(Math.random()*htmlSkill.length);

            return htmlSkill[pick]

        case 'css':
            pick = Math.floor(Math.random()*cssSkill.length);

            return cssSkill[pick]

        case 'react':
            pick = Math.floor(Math.random()*reactSkill.length);

            return reactSkill[pick]

        case 'redux':
            pick = Math.floor(Math.random()*redux.length);

            return redux[pick]
    }

}

export default pickRandomProjectOnSkill