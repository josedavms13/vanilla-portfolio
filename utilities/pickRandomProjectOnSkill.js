function pickRandomProjectOnSkill(skill){

    const javaScriptSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3'];
    const htmlSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3'];
    const cssSkill = ['Practice1', 'Practice0', 'Practice2', 'Practice3'];
    const reactSkill = ['Practice0', 'Practice2', 'Practice3'];
    const redux = [''];

    let pick;
    switch (skill){
        case 'javaScript':
            pick = Math.floor(Math.random()*javaScriptSkill.length);
            console.log(javaScriptSkill[pick]);
            return javaScriptSkill[pick]

        case 'html':
            pick = Math.floor(Math.random()*htmlSkill.length);
            console.log(htmlSkill[pick]);
            return htmlSkill[pick]

        case 'css':
            pick = Math.floor(Math.random()*cssSkill.length);
            console.log(cssSkill[pick]);
            return cssSkill[pick]

        case 'react':
            pick = Math.floor(Math.random()*reactSkill.length);
            console.log(reactSkill[pick]);
            return reactSkill[pick]

        case 'redux':
            pick = Math.floor(Math.random()*redux.length);
            console.log(redux[pick]);
            return redux[pick]
    }

}

export default pickRandomProjectOnSkill