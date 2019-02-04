const express = require('express');
const app = express();

const NAME = process.env.NAME || '';
const PORT = process.env.PORT || 8000;

app.get('/', (req, res)=> {
    console.log('Calling root index');
    return res.json({
        message: `Hello ${NAME}. I'm a ExpressJS server inside a docker container`
    });
});

app.get('/error', (req, res)=> {
    throw new Error('path not implemented');
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}` ));