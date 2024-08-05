// import the Hapi module
const Hapi = require('@hapi/hapi');
const routes = require('./routes');  // import the routes module

// create asynchronous func to configure and start the server
const init = async () => {
    // create a new Hapi server instance
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);  // register the imported routes with the server

    await server.start();  // start the server asynchronously
    console.log(`Server running on ${server.info.uri}`);  // log the server URI to the console
}

init(); // execute the ini func to start the server