import User from '../../domain/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (email: string, password: string): Promise<string> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h'
  });

  return token;
};
