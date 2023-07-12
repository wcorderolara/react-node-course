const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Restaurants Review App",
            version: "1.0.0",
            description: "API REST de integración de Proyecto de curso"
        },
        servers: [
            {
                url: "http://localhost:4001/restaurants/api/v1/"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

module.exports = swaggerOptions;
