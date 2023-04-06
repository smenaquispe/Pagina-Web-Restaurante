import express from 'express'
import {config as dotEnvConfig} from 'dotenv'
import { userRouter } from './users/infrastructure/user.router';
import { serieRouter } from './serie/infrastructure/serie.router';
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


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users',userRouter)
app.use('/serie',serieRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});