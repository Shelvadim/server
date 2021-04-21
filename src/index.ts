import express, { Request, Response } from 'express';
//import { router } from './routes/loginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
//import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());
app.use(cookieSession({ keys: ['asdfgh'] }));
//app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

//console.log('hi there');
