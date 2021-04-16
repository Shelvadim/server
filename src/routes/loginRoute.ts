import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (rec: Request, res: Response) => {
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

router.post('/login', (rec: Request, res: Response) => {
  const { email, password } = rec.body;
  res.send(email.toUpperCase());
});

export { router };
