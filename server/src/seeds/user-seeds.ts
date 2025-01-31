import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Nelson', email: 'nelson@microsoft.com', password: 'password' },
    { username: 'Alana', email: 'alana@yahoo.com', password: 'password' },
    { username: 'Justin', email: 'justin@google.com', password: 'password' },
  ], { individualHooks: true });
};
