import User, { IUser } from '../../domain/models/User';
import bcrypt from 'bcrypt';

export const registerUser = async (email: string, password: string): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  return await newUser.save();
};
