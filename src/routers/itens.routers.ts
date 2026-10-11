import express from 'express';
import { it } from 'node:test';

const itensRouter = express.Router();

itensRouter.post('/itens', (req, res) => {
    res.send('Cria novo item')
});

itensRouter.get('/itens', (req, res) => {
    res.send('Busca itens')
});

itensRouter.get('/itens/:id', (req, res) => {
    const id: number =+req.params.id
    res.send(`Busca o item pelo id ${id}`)
});

itensRouter.put('/itens/:id', (req,res) => {
    const id: number =+req.params.id
    res.send(`Atualiza o item com id ${id}`)
});

itensRouter.delete('/itens/:id', (req, res) => {
    const id: number =+req.params.id
    res.send(`Deleta o item com id ${id}`)
})

export default itensRouter;