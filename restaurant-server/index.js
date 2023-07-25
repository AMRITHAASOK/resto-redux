//1 import json-server
const jsonserver = require('json-server')

//create a server
const server = jsonserver.create()

//setup path for db.json
const router = jsonserver.router('db.json')

//return a middleware used by jsonserver.
const middleware = jsonserver.defaults()

//setup port
const port = process.env.PORT || 3001

//use the server
server.use(middleware)
server.use(router)

//start the server
server.listen(port,()=>{
    console.log('Server started on port'+port);
})