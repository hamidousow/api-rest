const http = require('http');

//const app = require('app');

const server = http.createServer((req, res) => {
    res.end('la réponse du serveur')
})

server.listen(process.env.PORT || 3000)