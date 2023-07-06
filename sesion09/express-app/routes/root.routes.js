const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>  response.send('Ruta principal o Home'));

module.exports = router;
