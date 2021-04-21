import { NextFunction, Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

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
        
      `
    );
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === 'hi@hi.com' && password === 'pa') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
