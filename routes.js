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
            const {name = "stranger"} = request.params;
            // extract the 'lang' query parameter from the request
            const {lang} = request.query;
            // check if the 'lang' query parameter is 'id' (for Indonesian language)
            if(lang === 'id') {
                return `Hai, ${name}!`;  // return a greeting message in Indonesian
            }

            return `Hello, ${name}!`;  // return a greeting message in English
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