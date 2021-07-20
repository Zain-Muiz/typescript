import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
const db = require('../../models/users');
const AuthController: Router = Router();

AuthController.post('/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: 'Email or Password Missing',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  db.Users.create({
    email: email,
    password: hashedPassword,
  })
    .then(() => {
      res.status(200).send({
        message: 'Signup completed successfully.',
      });
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((err: any) => {
      if (err.parent.code === '23505') {
        res.status(409).send({
          message: 'Email Already Exists.',
        });
      } else {
        res.status(500).send({
          message: err.message || 'Error occurred while creating the User.',
        });
      }
    });
});

export default AuthController;
