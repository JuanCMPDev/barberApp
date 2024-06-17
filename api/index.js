const express = require('express');
const auth = require('./routes/authRoutes.js')

const port = 8800;

const app = express();

app.use(express.json());
app.use('/api/auth', auth);

app.listen(port, ()=>{
    console.log("servidor montado correctamente");
});