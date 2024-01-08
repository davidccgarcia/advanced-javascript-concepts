
import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerText = hero.name;
    }

    const renderError = ( error ) => {
        element.innerText = error;
    }

    const id1 = '5d86371fd55e2e2a30fe1cc3';

    findHero( id1 )
        // .then( ( hero ) => renderHero( hero ) );
        .then( renderHero )
        // .catch( ( error ) => renderError( error ) );
        .catch( renderError );

}

const findHero = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const hero = heroes.find( hero => hero.id === id);

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject( `Hero with id ${ id } not found.`);
    });
}