const opts = { //opt: opciones
    base: { // --base ,que se escribe en la consola
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts) //('comando','descripcion para el usuario','obbjeto: recibe la configuracion de parametros o de flag que el comando puede recibir')
    .command('crear', 'Crea un archivo de la tabla elegida', opts) //('comando','descripcion para el usuario','obbjeto: recibe la configuracion de parametros o de flag que el comando puede recibir')
    .help()
    .argv;

module.exports = {
    argv
}