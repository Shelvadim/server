import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permited');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'pa') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(
      `
        <div>            
           <div>You are logged in</div>
           <a href="/logout">Logout</a> 
        </div>        
      `
    );
  } else {
    res.send(
      `
        <div>            
           <div>You are not logged in</div>
           <a href="/login">Login</a> 
        </div>        
      `
    );
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected rout, legged in uder');
});

export { router };
