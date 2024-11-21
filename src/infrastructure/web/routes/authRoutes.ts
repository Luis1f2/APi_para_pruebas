import { Router } from 'express';
import { registerUser } from '../../../application/use_cases/registerUser';
import { loginUser } from '../../../application/use_cases/loginUser';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({ error: errorMessage });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({ error: errorMessage });
  }
});

export default router;
