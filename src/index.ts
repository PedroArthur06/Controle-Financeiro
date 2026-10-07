import express, { type Request, type Response } from 'express';

const app = express();
const port = 3000

app.use( express.json() );

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor iniciado!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

