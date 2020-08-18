const axios = require('axios');

const getLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=a99dd621ef5a1e8c15c19d424e5801f1&query=${encodeURL}`,
        //timeout: 1000,
        headers: { 'access_key': 'a99dd621ef5a1e8c15c19d424e5801f1' }
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        console.log(`No hay resultados para ${dir}`);
    }

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLatLng
}