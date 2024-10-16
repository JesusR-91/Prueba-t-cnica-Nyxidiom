import prisma from '../../server/db/db.server';

// Create User
export async function createUser(username: string, email: string, passwordHash: string) {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
    },
  });
  return user;
}

// Get user
export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// Update User
export async function updateUser(id: number, data: Partial<Omit<User, 'id'>>) {
  const updatedUser = await prisma.user.update({
    where: { id },
    data,
    
  });
  return updatedUser;
}

// Delete User
export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: { id },
  });
}
