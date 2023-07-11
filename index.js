const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Seja bem-vindo ao meu app!")                           //criando servidor com express
});

app.get("/mateus", function(req,res){                               //aprendendo a fazer rotas
    res.send("Minha segunda pagina")
});

app.get("/jorge", function(req,res){
    res.send("Minha terceira pagina")
});

app.listen(8081, function(){                                                //funções de callback
    console.log("Servidor Rodando na url http://localhost:8081")       
});



