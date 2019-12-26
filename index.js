var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
/* // redirecionamento para a raiz do projeto e passando uma mensagem de retorno
 app.get('/',function(req, res){
    res.send("Hello Word!!! nodes em NOtempo real");
});
 
//o mesmo comando do anterior porem passando agora uma rota para a pagina about
app.get('/about',function(req, res){
    res.send("Hello Word!!! esta e a pagina about top demais vey");
});
 */
//o mesmo comando do anterior porem passando agora uma rota para a pagina about
app.get('/about',function(req, res){
    res.send("Hello Word!!! esta e a pagina about top demais vey");
});


//Adicionando esta linha vamos ativar o ejs no codigo para ser utilizado
app.set('view engine','ejs');
//codigo para chamar os arquivos staticos, exemplo de arquivo statico e o css
app.use(express.static(__dirname+'/public'));
//codigo para renderizar a pagina
var title = "Titulo Repassado via Comando";
var componentArray = ['potentiometer','piezo','phototransistor','pushbutton'];

app.get('/',function(req,res){
    res.render('index',{
        title:title,
        components: componentArray
    });
});

server.listen(3000, function(){
    console.log('listening on port 3000...');
});