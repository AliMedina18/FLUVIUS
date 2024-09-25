const OpenAI = require('openai');
require('dotenv').config();  // Para cargar variables de entorno desde el archivo .env

// Configurar OpenAI con la clave de API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de que la variable de entorno esté configurada correctamente
});

// Función para enviar una solicitud a GPT
const chatWithGPT = async(prompt)=> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Puedes usar 'gpt-4' si tienes acceso
      messages: [{ role: 'user', content: prompt }],
    });

    console.log('Respuesta de GPT:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error al conectarse con GPT:', error);
  }
}

  module.exports = chatWithGPT