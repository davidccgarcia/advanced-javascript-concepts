import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncGeneratorComponent = async( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if ( isFinished ) break;

        element.innerHTML += `${ value } <br>`;

    } while ( !isFinished )

}

async function* getHeroGenerator() {

    for ( const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay más heroes';
}

const sleep = () => {
    return new Promise( ( resolve ) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    });
}