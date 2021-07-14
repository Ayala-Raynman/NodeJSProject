// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//     console.log(`My Node Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3002
app.use(express.json())
// app.post('/sendData', (req, res) => {
//     try {
//         const name = req.body.name;
//         console.log(req.body.name)
//         res.send(`hi ${name}, nice to meet you`)
//     }

//     catch (err) {
//         res.status(500).send('missing in the request')
//     }
// })

// const app = require('./app');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})