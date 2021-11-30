import express from 'express';
import { Request, Response, NextFunction }  from 'express';
import { listaNombresConfig, getConfig, elegirAlgoritmo } from "./controllers/generador-codigos"

var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req : Request, res :  Response) => {
    res.send(listaNombresConfig())
});

app.post('/', async (req, res) => {
    var numero = req.body.numero;
    var eleccion = req.body.eleccion;
    console.log("Servidor ha recibido: " + numero + "-" + eleccion)
    var lista = elegirAlgoritmo(eleccion, numero)
    res.send(lista)
    console.log("LISTA CUPONES: " + lista)
 });

app.listen(4201, '127.0.0.1', function() {
    console.log('Server listening on port 4201');
});