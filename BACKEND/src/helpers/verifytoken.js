
const {users} = require('../models')

const verifyToken = async (req, res, next) => {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'No se proporcionó token' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRETKEY); // Verifica el token
      req.user = await users.findOne({ where: { id: decoded.id } }); // Busca el usuario en la base de datos
  
      if (!req.user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      next(); // Continúa con la siguiente función de middleware o controlador
    } catch (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }
  };
  
  module.exports = verifyToken;