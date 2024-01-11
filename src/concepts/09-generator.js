/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    // const myGenerator = myfirstGeneratorFunction();
    // console.log( myGenerator.next() );

    const genId = idGenerator();
    
    const button = document.createElement('button');
    button.innerText = 'Click on me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click on me: ${ value }`;
    }

    button.addEventListener('click', renderButton );

    console.log( genId.next() );
    

}

function* idGenerator() {
    let currentId = 0;

    while(true) {
        yield ++currentId;
    }
}

function* myfirstGeneratorFunction() {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    return 'Ya no hay valores';
    yield 'Ya no se puede hacer nada';

}