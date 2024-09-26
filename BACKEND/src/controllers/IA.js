const OpenAI = require('openai');
require('dotenv').config();  // Para cargar variables de entorno desde el archivo .env

const {response,request} = require('express');

const axios = require('axios')



// let { members, account,cubic_meters,L_shower,reasoning, L_faucet, L_wash, washingMachine,carWaterUsage,beefWaterUsage,milkWaterUsage,sodaWaterUsage,costPerCubicMeter,waterUsagePerRationingDay} = req.body

  
const chatWithGPT = async (req = request, res= response)=> {


 // Desestructuración de las variables del cuerpo de la solicitud
 let { shower, faucet, wash, washingMachine, carWaterUsage, beefWaterUsage, milkWaterUsage, sodaWaterUsage, costPerCubicMeter, waterUsagePerRationingDay } = req.body;

 // Definir variables adicionales que necesitas
 const members = req.body.members; // Número de miembros en la familia
 const reasoning = req.body.reasoning; // Días de racionamiento de agua
 const cubic_meters = req.body.cubic_meters; // Metros cúbicos utilizados por mes
 const account = req.body.account; // Valor de la cuenta de agua este mes

 // Crear el prompt para la API
 let prompt = `Me gustaría reducir mi consumo de agua teniendo en cuenta los siguientes puntos 
 1. Vivo en Bogotá y soy estrato 2-3,
 2. Somos ${members} en mi núcleo familiar,
 3. Tengo ${reasoning} días de racionamiento de agua por lo que no tengo agua todo el mes,
 4. Utilizo ${cubic_meters} metros cúbicos por mes según mi factura,
 5. El valor de mi cuenta este mes fue ${account},
 6. Gasto un total de ${shower} litros por minuto de ducha,
 7. Gasto un total de ${faucet} litros por minuto del grifo,
 8. Gasto un total de ${wash} litros por lavado de platos,
 9. Gasto un total de ${washingMachine} litros por lavado de ropa,
 10. Gasto un total de ${carWaterUsage} litros por lavado del coche,
 11. Gasto un total de ${beefWaterUsage} litros por kilogramo de res,
 12. Gasto un total de ${milkWaterUsage} litros por litro de leche,
 13. Gasto un total de ${sodaWaterUsage} litros por litro de refresco,
 14. El costo por metro cúbico de agua en mi hogar es de ${costPerCubicMeter},
 15. Mi consumo promedio durante los días de racionamiento: ${waterUsagePerRationingDay.toFixed(2)} litros por día.

 En los tips que me vayas a dar por favor incluye cuánto puede reducir mi consumo en litros y en pesos colombianos.`;

 let encodedPrompt = encodeURIComponent(prompt);

  try{

      const response = await axios.post(`${process.env.CHATGPT}/${encodedPrompt}`);

      res.status(200).json({ menssage: response.data });

  }catch(error){

    console.error('Error al hacer la solicitud con Axios:', error);
    
  };
}

  module.exports = chatWithGPT