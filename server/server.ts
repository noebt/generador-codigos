import express from 'express';
import { Request, Response}  from 'express';
import { listaNombresConfig, elegirAlgoritmo } from './controllers/eleccion-configuracion';

var cors = require('cors');
const app = express();
const puerto = 4201;
app.use(cors());
app.use(express.json())

//Envía los nombres de las configuraciones
app.get('/', (req : Request, res :  Response) => {
    try{
        res.send(listaNombresConfig())
    } catch (error){
        console.log("ERROR:" + error)
    }
});

//Recibe la configuración seleccionada y la cantidad y devuelve la lista correspondiente
app.post('/', async (req, res) => {
    try {
        var numero = req.body.numero;
        var eleccion = req.body.eleccion;
        var listaCodigos = elegirAlgoritmo(eleccion, numero)
        res.send(listaCodigos)
    }catch(error){
        console.log("ERROR:" + error)
    }
 });

 //Servidor en puerto 4201
app.listen(puerto, '127.0.0.1', function() {
    console.log('Server listening on port 4201');
});

