import express from 'express';


const router = express.Router();

const quotes = [
];

router.get('/', (req, res) => {
  res.json(quotes);
});

router.post('/', (req, res) => {
  const newQuote = req.body;

  quotes.push(newQuote);

  const author = newQuote.author;
  res.send(`Quote by ${author} added to the database!`);
});

export default router;
