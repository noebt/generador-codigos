import express from 'express';
import { Request, Response, NextFunction }  from 'express';
import { listaNombresConfig, getConfig, elegirAlgoritmo } from "./controllers/generador-codigos"

var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req : Request, res :  Response) => {
    try{
        res.send(listaNombresConfig())
    } catch (error){
        console.log("ERROR:" + error)
    }
});

app.post('/', async (req, res) => {
    try {
        var numero = req.body.numero;
        var eleccion = req.body.eleccion;
        var lista = elegirAlgoritmo(eleccion, numero)
        res.send(lista)
    }catch(error){
        console.log("ERROR:" + error)
    }
 });

app.listen(4201, '127.0.0.1', function() {
    console.log('Server listening on port 4201');
});