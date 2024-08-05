// import the Hapi module
const Hapi = require('@hapi/hapi');

// create asynchronous func to configure and start the server
const init = async () => {
    // create a new Hapi server instance
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();  // start the server
    console.log(`Server running on ${server.info.uri}`);  // log the server URI
}

init(); // initialize the server