import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import { calc } from './calc.js';

const PORT = process.env.PORT || 2345;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/sum', (req, resp) => {
    resp.send(calc('sum', req.query));
});

app.get('/subtraction', (req, resp) => {
    resp.send(calc('sub', req.query));
});

app.get('/multiply', (req, resp) => {
    resp.send(calc('mul', req.query));
});

app.get('/division', (req, resp) => {
    resp.send(calc('div', req.query));
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
