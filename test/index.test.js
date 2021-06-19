import languageManager from '../index.js'

test('set language', ()=>{

    // Arrange

    const  spanish = 'spanish';
    const english = 'english';



    //Act

    const results ={
        spanish,
        english
    }


    //Assert

    expect(languageManager(spanish)).toEqual(results.spanish);
    expect(languageManager(english)).toEqual(results.english);

})