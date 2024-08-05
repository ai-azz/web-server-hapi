// import the Hapi module
const Hapi = require('@hapi/hapi');

// create asynchronous func to configure and start the server
const init = async () => {
    // create a new Hapi server instance
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // define multiple routes using an array of route objects
    server.route([
        {   // 1st route
            method: 'GET',  // the HTTP method for the 1st route
            path: '/',  // the URL path for the  1st route
            handler: (request, h) => {
                // response returned for requests to the root path
                return 'Hello World!';
            },
        },
        {   // 2nd route
            method: 'GET',  // the http method for the 2nd route
            path: '/about',  // the URL path for the 2nd route
            handler: (request, h) => {
                // response returned for request to the /about path
                return 'About page';
            },
        },
    ]);

    await server.start();  // start the server asynchronously
    console.log(`Server running on ${server.info.uri}`);  // log the server URI to the console
}

init(); // execute the ini func to start the server