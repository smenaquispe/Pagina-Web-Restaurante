import express from 'express'
import {config as dotEnvConfig} from 'dotenv'


const app: express.Application = express();
dotEnvConfig();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});