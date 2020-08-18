//const { require } = require('yargs');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener',
        demand: true
    }
}).argv;


//lugar.getLatLng(argv.direccion)
//    .then(console.log)

//clima.getClima(-0.217, -78.500)
//    .then(console.log)
//    .catch(console.log)

//console.log(argv.direccion);


const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion } ${e}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);