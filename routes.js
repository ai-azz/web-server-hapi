// define an array of route objects for configuring server routes
const routes = [
    {   
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {   
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {   
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {   
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman about tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',  // http method for the /hello/{name?} path (GET requests)
        path: '/hello/{name?}',  // the url path with an optional parameter {name}
        handler: (request, h) => {
            const {name} = request.params;  // extract the name parameter from the request
            // response returned for GET requests to the /hello/{name?} path
            return `Hello, ${name}`;  // use the name parameter in the response
        },
    },
    {   
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat ditemukan';
        },
    },
];

module.exports = routes;