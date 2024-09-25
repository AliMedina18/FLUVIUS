const OpenAI = require('openai');
require('dotenv').config();  // Para cargar variables de entorno desde el archivo .env

const {response,request} = require('express');

const axios = require('axios')

  
const chatWithGPT = async (req = request, res= response)=> {

let {stratum, members, account,cubic_meters,L_shower,reasoning, L_faucet, L_wash, washingMachine,carWaterUsage,beefWaterUsage,milkWaterUsage,sodaWaterUsage,costPerCubicMeter,waterUsagePerRationingDay} = req.body
let prompt = `Me gustaria reducir mi consumo de agua teniendo en cuenta los siguientes puntos 
1. Vivo en bogotá y soy estracto ${stratum}, 
2. Somos ${members} en mi nucleo familiar,
3. Tengo ${reasoning}días de razonamiento de agua por lo que no tengo agua todo el mes,
4. Utilizo ${cubic_meters}metros cubicos por mes según mi factura,
5. El valor de mi cuenta este mes fue ${account},
6. Gasto un total de ${L_shower} litros por minuto de ducha,
7. Gasto un total de ${L_faucet} litros por minuto del grifo,
8. Gasto un total de ${L_wash} litros por lavado de platos,
9. Gasto un total de ${washingMachine} litros por lavado de ropa,
10. Gasto un total de ${carWaterUsage} por lavado del coche,
11. Gasto un total de ${beefWaterUsage} por kilogramo de res,
12. Gasto un total de ${milkWaterUsage} litros por litro de leche,
13. Gasto un total de ${sodaWaterUsage} por litro de refresco,
14. El costos por metro cubico de agua en mi hogar es de ${costPerCubicMeter},
15. Mi consumo promedio durante los días de racionamiento: ${waterUsagePerRationingDay.toFixed(2)} litros por día

En los tips que me vayas a dar por favor incluye cuanto puede reducir mi consumo en litros y en pesos colombianos `


let encodedPrompt = encodeURIComponent(prompt);

  axios.post(`${process.env.CHATGPT}/${encodedPrompt}`)
  .then(response => {
    console.log('Respuesta del servidor:', response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud con Axios:', error);
  });
}

  module.exports = chatWithGPT