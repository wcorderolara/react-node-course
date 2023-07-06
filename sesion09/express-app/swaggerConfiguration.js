const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "API demostrativa en Node.js",
            version: "1.0.0",
            description: "Esta es una Demo de como documentar APIs"
        },
        servers: [
            {
                url: "http://localhost:4001/mp-react-node/v1/"
            },
            {
                url: "http://localhost:4001/mp-react-node/v2/"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

module.exports = options;
