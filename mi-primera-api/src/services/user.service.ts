import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Validación en código
async function createUser() {
  try {
    await prisma.user.create({
      data: { email: 'duplicate@email.com' }
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Email duplicado
    }
  }
}

