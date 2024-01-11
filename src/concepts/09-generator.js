/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuncionsComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() );
    const count = counter();

    const button = document.createElement('button');
    button.innerText = 'Count';
    element.append( button );

    const renderButton = () => {
        const { value } = count.next();
        button.innerText = `Count: ${ value }`;
    }

    button.addEventListener('click', renderButton );

}

function* counter() {
    let counter = 0;

    while(true) {
        yield ++counter;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    return 'Ya no hay más valores';
    yield 'Aquí no se puede hacer nada';
}