const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Simulação de banco de dados
const users = [
    { username: 'Joaozinho123', password: 'senha1' },
    { username: 'usuario2', password: 'senha2' }
];

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});