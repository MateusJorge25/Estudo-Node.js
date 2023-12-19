const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Seja bem-vindo ao meu app!")                           //criando servidor com express
});

app.get("/segunda", function(req,res){                               //aprendendo a fazer rotas
    res.send("Minha segunda pagina")
});

app.get("/terceira", function(req,res){
    res.send("Minha terceira pagina")
});
                                                                    /*quando e colocado exemplo:(/ola/:nome), voce pode ir no seu servidor e colocar seu nome no lugar de *nome* EXEMPLO:(/ola/mateus)*/
app.get("/ola/:nome/:cargo/:cor", function(req,res){                  
    res.send("<h1>ola" + req.params.nome + "</h1>"+"<h2> Seu cargo e: " +req.params.cargo+"</h2>"+"<h3> Sua cor favorita e: "+req.params.cor+"</h3>");
    //nao e possive usar mais de um res.send numa rota 
                                                                    // esta linha com h1 serve para o servidor pegar os dados que vc colocou na rota, nesse exemplo ele esta pegando o nome da pessoa                        
} );

app.listen(8081, function(){                                                //funções de callback
    console.log("Servidor Rodando na url http://localhost:8081")       
});



