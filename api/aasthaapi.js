import axios from 'axios';

export default axios.create({
    baseURL:"http://demo.expresscab.in/aashtha-api",
    headers: { 
        'Content-Type': 'application/json'
      },
})