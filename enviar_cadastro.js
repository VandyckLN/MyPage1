/Aula.js/Treino.js / Mypage / enviar_cadastro.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/enviar_cadastro', async (req, res) => {
    const { nome, email, ddd, telefone, endereco, cidade, estado } = req.body;


    try {
        // Configuração do transporte de e-mail (substitua com suas credenciais)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // ou outro serviço de e-mail
            auth: {
                user: 'vdkd3v@gmail.com', // Seu e-mail
                pass: '*PB2025i', // Sua senha ou senha de aplicativo
            },
        });


        // Configuração do e-mail
        const mailOptions = {
            from: 'seuemail@gmail.com', // Seu e-mail
            to: 'destinatario@example.com', // E-mail do destinatário
            subject: 'Novo Cadastro de Cliente',
            text: `
  Nome: ${nome}
  Email: ${email}
  Telefone: (${ddd}) ${telefone}
  Endereço: ${endereco}
  Cidade: ${cidade}
  Estado: ${estado}
  `,
        };


        // Envio do e-mail
        await transporter.sendMail(mailOptions);


        console.log('E-mail enviado com sucesso!');
        res.status(200).send('success');
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        res.status(500).send('error');
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});