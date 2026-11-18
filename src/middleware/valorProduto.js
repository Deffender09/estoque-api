const valorProduto = function (req,res,next) {
    let preco = req.body.preco
    if (preco < 100) {
        //chuta pra fora
        res.send('Não autorizado produto menor que 100 reais.')
    } else {
        next()
    }
}

module.exports = valorProduto