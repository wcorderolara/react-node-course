const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const controller = require('./controllers/restaurants.controller');
const db = require('./models');

app.use(express.json());

app.post('/restaurants', controller.createRestaurant);
app.post('/restaurants/bulk', controller.bulkCreateRestaurants);

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Aplicacion corriendo en el puerto ${PORT}`);
    })
})

