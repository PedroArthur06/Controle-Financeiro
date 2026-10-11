import express from 'express';
import cors from 'cors';
import itensRouter from './routers/itens.routers.js';
import process from 'node:process';

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();

app.get('/', (req, res) => {
    res.send('Endpoint raiz')
});

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api', itensRouter)

app.use((req, res) => {
    res.status(404)
});

app.listen(PORT, () => {
    console.log(`Servidor iniciando em ${HOSTNAME}:${PORT}`)
})