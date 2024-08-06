// define an array of route objects for configuring server routes
const routes = [
    {   // root path
        method: 'GET',  // http method for the root path (GET request)
        path: '/',  // the url path for the root path
        handler: (request, h) => {
            // response returned for the GET request to the root path
            return 'Homepage';
        },
    },
    {   // root path
        method: '*', // the wildcard method to match all http methods
        path: '/',  // url path for the root path
        handler: (request, h) => {
            // response returned for the non-GET requests to the root path
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {   // /about path
        method: 'GET',  // http method for about path (GET request)
        path: '/about',  // the url path for about path
        handler: (request, h) => {
            // response returned for GET request to the /about path
            return 'About page';
        },
    },
    {   // /about path
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman about tidak dapat diakses dengan method tersebut';
        },
    },
    {   // /{any*} path -> catch all path or any path that doesn't match the previous defined routes
        method: '*',  // the wildcard method to match all http methods
        path: '/{any*}',  // a wildcard path to match any path not defined above
        handler: (request, h) => {
            // response returned for any path that doesn't match defined routes
            return 'Halaman tidak dapat ditemukan';
        },
    },
];

module.exports = routes;