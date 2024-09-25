const {Router, response} = require('express');
// const chatGPT = require('../controllers/IA');
// const chatWithGPT = require('../controllers/IA');

const router=Router();

// const OpenAI = require('openai');
// require('dotenv').config();

// // Inicializa OpenAI con la API Key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });



// router.get('/chat', async (req, res) => {
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [],
//             temperature: 1,
//             max_tokens: 2048,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//             response_format: {
//               "type": "text"
//             },
//           });
//           console.log(response)
//     } catch (error) {
//       console.error('Error al conectarse con la API de OpenAI:', error);
  
//       // Manejo específico para errores de cuota
//       if (error.code === 'insufficient_quota') {
//         res.status(429).json({
//           success: false,
//           error: 'Has excedido tu cuota de uso de la API. Intenta de nuevo más tarde.',
//         });
//       } else {
//         res.status(500).json({
//           success: false,
//           error: 'Error al conectarse con la API de OpenAI',
//         });
//       }
//     }
//   });
  
  


module.exports = router