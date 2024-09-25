const OpenAI = require('openai');
require('dotenv').config();  // Para cargar variables de entorno desde el archivo .env

const {response,request} = require('express');

const axios = require('axios')

  
const chatWithGPT = async (req = request, res= response)=> {

let prompt = "puedes darme una definicion de que es un json"


  axios.post(`${process.env.CHATGPT}/${prompt}`)
  .then(response => {
    console.log('Respuesta del servidor:', response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud con Axios:', error);
  });
}

  module.exports = chatWithGPT