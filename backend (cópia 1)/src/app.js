
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota de usuários
app.get('/usuarios', (req, res) => {
    res.status(200).send('Informação Enviada');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`);
});
