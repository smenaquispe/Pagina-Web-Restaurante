import express from 'express'
import {config as dotEnvConfig} from 'dotenv'
import { userRouter } from './users/infrastructure/user.router';
import sequelize from './shared/db';

const app: express.Application = express();
dotEnvConfig();

const PORT = process.env.PORT || 3000

/**
 * db
 */
sequelize.authenticate()
.then(() => console.log('conntected to db'))
.catch(err => console.log('error connecting to db -> ' + err))

app.use('/users',userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});