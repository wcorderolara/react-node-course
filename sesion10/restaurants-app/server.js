const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const db = require('./models');
const routes = require('./routes/index.routes');

app.use(express.json());

app.use('/api/v1', routes);

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Aplicacion corriendo en el puerto ${PORT}`);
    })
})

