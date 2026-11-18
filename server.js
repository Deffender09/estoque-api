require('dotenv').config();
const loggerMiddleware = require('./src/middleware/logger')
const valorProdutoMiddleware = require('./src/middleware/valorProduto')
const valorDobradoMiddleware = require('./src/middleware/valorDobrado')
const express = require('express');
const app = express();
const port = 3000;

//middleware/
app.use(express.json());
// para formatar os dados do formulario
app.use(express.urlencoded({extended: true}));
//para formatar dados do formulario urlencoded
app.use(loggerMiddleware)

app.use(valorProdutoMiddleware)

app.use(valorDobradoMiddleware)

app.get('/',function(req,res){
    res.send('ola mundo, meu nome é ' + process.env.nome)
});

app.post('/produtos', (req,res) => {
    let produto = req.body

    res.send(`O produto foi criado! Nome: ${produto.nome}, Valor:${produto.preco}`)
})

app.put('/produtos/:id',(req,res) =>{
    let id = req.params.id 
    let produto = req.body
     res.send(`O produto ${id} foi alterado`)
})

app.delete('/produtos/:id', (req,res) =>{
    let id = req.params.id 
     res.send(`O produto ${id} foi deletado`)
})

app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
});
