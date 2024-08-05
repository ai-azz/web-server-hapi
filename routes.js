const routes = [
    {           
        method: 'GET',  // the HTTP method for the 1st route
        path: '/',  // the URL path for the  1st route
        handler: (request, h) => {
            // response returned for requests to the root path
            return 'Hello World!';
        },
    },
    {          
        method: 'GET',  // the http method for the 2nd route
        path: '/about',  // the URL path for the 2nd route
        handler: (request, h) => {
            // response returned for request to the /about path
            return 'About page';
        },
    },
];

// export the routes array to be imported and used in server.js file
module.exports = routes;