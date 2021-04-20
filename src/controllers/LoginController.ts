import { Request, Response } from 'express';
import { get, controller } from './decorators';
//import { controller } from './decorators/controller';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(
      `
        <form method="POST">
          <div>
            <lable>Email</lable>
            <input name="email"/>
          </div>
          <div>
            <lable>Password</lable>
            <input name="password" type="password"/>
          </div>
          <button>Submit</button>
        </form>
        <h1>Hi there from router</h1>
      `
    );
  }
}
