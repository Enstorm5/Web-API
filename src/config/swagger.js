const swaggerDocument = {
    openapi: "3.0.3",
    info: {
        title: "Web API",
        version: "1.0.0",
        description: "Sample API for provinces, districts, stations, vehicles, and pings.",
    },
    servers: [
        {
            url: "/",
        },
    ],
    paths: {
        "/route": {
            get: {
                summary: "Health route",
                responses: {
                    200: {
                        description: "API status",
                    },
                },
            },
        },
        "/provinces": {
            get: {
                summary: "List provinces",
                responses: {
                    200: {
                        description: "Province list",
                    },
                },
            },
        },
        "/provinces/{id}": {
            get: {
                summary: "Get province by id",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Province detail",
                    },
                    404: {
                        description: "Province not found",
                    },
                },
            },
        },
        "/districts": {
            get: {
                summary: "List districts",
                responses: {
                    200: {
                        description: "District list",
                    },
                },
            },
        },
        "/districts/{id}": {
            get: {
                summary: "Get district by id",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "District detail",
                    },
                    404: {
                        description: "District not found",
                    },
                },
            },
        },
        "/stations": {
            get: {
                summary: "List stations",
                responses: {
                    200: {
                        description: "Station list",
                    },
                },
            },
        },
        "/stations/{id}": {
            get: {
                summary: "Get station by id",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Station detail",
                    },
                    404: {
                        description: "Station not found",
                    },
                },
            },
        },
        "/vehicles": {
            get: {
                summary: "List vehicles",
                responses: {
                    200: {
                        description: "Vehicle list",
                    },
                },
            },
        },
        "/vehicles/{id}": {
            get: {
                summary: "Get vehicle by id",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Vehicle detail",
                    },
                    404: {
                        description: "Vehicle not found",
                    },
                },
            },
        },
        "/vehicles/{id}/pings": {
            get: {
                summary: "List vehicle pings",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Ping list",
                    },
                },
            },
        },
    },
};

module.exports = swaggerDocument;