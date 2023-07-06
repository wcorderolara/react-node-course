const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const routes = require('./routes/index.routes')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./swaggerConfiguration');
const swaggerSpecs = swaggerJsDoc(options);

app.use(express.json());

app.use('/mp-react-node/v1/', routes);
app.use('/mp-react-node/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
})
