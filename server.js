// import the Hapi module
const Hapi = require('@hapi/hapi');

// create asynchronous func to configure and start the server
const init = async () => {
    // create a new Hapi server instance
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // create routing on hapi project (using route configuration object on `server.route()` method)
    server.route({
        method: 'GET',  // specify the HTTP method for the route
        path: '/',  // define the URL path for the route
        handler: (request, h) => {
            // response to be sent when the route is accessed
            return 'Hello World!';
        }
    });

    await server.start();  // start the server
    console.log(`Server running on ${server.info.uri}`);  // log the server URI
}

init(); // initialize the server