const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
};
const Termi = require('yargs')
                .command('Listar','Imprimir en consola la tabla de multiplicar',opt)
                .command('Crear','Crea archivo con la base y el limite', opt)
                .help()
                .argv;

module.exports = {
    Termi
};