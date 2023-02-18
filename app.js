const exp = require('constants');
const express = require('express');
const https = require('https');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(port, function(){
    console.log("Server started at port " + port);
});

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    let id = Number(req.body.pokemon);
    let url= 'https://pokeapi.co/api/v2/pokemon/' + id;
    console.log(url);
    https.get(url, function(response){
       response.on('data', function(){
        
       }); 
    });

});