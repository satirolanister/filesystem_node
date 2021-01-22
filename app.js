const {Termi} = require('./consola/yargs');
const colors = require('colors');
const { crearArchivo, mostrarConsola  } = require('./multiplicar/multiplicar'); 

let comando = Termi._[0];


switch( comando ) {

    case 'listar':
        mostrarConsola(Termi.base, Termi.limite);
    break;

    case 'crear':
        crearArchivo(Termi.base, Termi.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => {console.log(e)});
    break;
    
    default:
        console.log(`comando ${comando} no reconocido`);
}


/* let parametro = argv[2];
let base = parametro.split('=')[1]; */


