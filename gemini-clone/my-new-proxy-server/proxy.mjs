import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3001;

app.use(express.json());

app.post('/generateContent', async (req, res) => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/projects/My%20Project%2042606/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
