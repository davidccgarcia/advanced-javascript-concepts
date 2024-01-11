/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuncionsComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );

}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    return 'Ya no hay más valores';
    yield 'Aquí no se puede hacer nada';
}