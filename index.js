import express from 'express';
import bodyParser from 'body-parser';
import quotesRoutes from './routes/quotes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/quotes', quotesRoutes);  

app.get('/', (req, res) => { 
    console.log('[teff]');
    res.send('hello');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
