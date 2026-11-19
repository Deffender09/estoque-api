import dotenv from 'dotenv';
dotenv.config();

import {loggerMiddleware} from './src/middleware/index.js';
import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;

//middleware/
app.use(json());
// para formatar os dados do formulario
app.use(urlencoded({extended: true}));
//para formatar dados do formulario urlencoded
app.use(loggerMiddleware)


app.get('/',function(req,res){
    res.status(200).json({
        "status": "Ok",
        "codigo": 200,
        "mensagem": `Bem Vindo`
    })
});

app.post('/produtos', (req,res) => {
        let produto = req.body

            // res.send(`O produto foi criado! Nome: ${produto.nome}, Valor:${produto.preco}`)
            res.status(201).json({
            "status": "Sucesso",
            "codigo": 201,
            "mensagem": `O Produto foi criado! Nome: ${produto.nome}, valor: ${produto.preco}`
    })
})

app.put('/produtos/:id',(req,res) =>{
        let id = req.params.id 
            //let produto = req.body
            //res.send(`O produto ${id} foi alterado`)  

            res.status(200).json({
            "status": "Alterado",
            "codigo": 200,
            "mensagem": `O Produto ${id} foi alterado! Nome: ${produto.nome}, valor: ${produto.preco}`
    })
})

app.delete('/produtos/:id', (req,res) =>{
    let id = req.params.id 
     res.status(200).json({
        "status": "Deletado",
        "codigo": 200,
        "mensagem": `O Produto ${id} foi deletado! `
    })
})

app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
});
