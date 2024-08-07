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
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            // extract the name parameter from the request, defaulting to "stranger" if not provided
            const {name = "stranger"} = request.params;
            return `Hello, ${name}!`;
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