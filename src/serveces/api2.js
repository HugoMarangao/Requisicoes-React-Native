import axios from 'axios';
//http://economia.awesomeapi.com.br/json/

//all(rota das moedas)

const api2 = axios.create({
    baseURL:'http://economia.awesomeapi.com.br/json/'
});

export default api2;