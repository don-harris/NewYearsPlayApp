const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('I am listening Don, but for how long:', port)
})
