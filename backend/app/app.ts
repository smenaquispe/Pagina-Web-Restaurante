import express from 'express'
import {config as dotEnvConfig} from 'dotenv'
import { userRouter } from './users/infrastructure/user.router';


const app: express.Application = express();
dotEnvConfig();

const PORT = process.env.PORT || 3000

app.use('/users',userRouter)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});