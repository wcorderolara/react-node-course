const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const db = require('./models');
const routes = require('./routes/index.routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./utils/swagger-options');
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

app.use(express.json());


app.use('/restaurants/api/v1', routes);
app.use('/restaurants/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Aplicacion corriendo en el puerto ${PORT}`)
    })
})

