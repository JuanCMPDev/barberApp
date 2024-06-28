const express = require('express');
const cors = require('cors');
const auth = require('./routes/authRoutes.js');

const port = 8800;

const app = express();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use('/api/auth', auth);

app.listen(port, () => {
    console.log("Servidor montado correctamente en el puerto", port);
});
