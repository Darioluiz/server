import http from 'http'

const port = 3000

const server = http.createServer((req, res) => {
  return res.end('Olá API')
})

server.listen(3333)
