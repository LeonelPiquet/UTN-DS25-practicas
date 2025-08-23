import prisma from '../config/prisma';
import type { Book } from 'prisma';
import { CreateBookRequest, UpdateBookRequest } from 
'../types/book.types';
export async function getAllBooks(): Promise<Book[]> {
  const books = await prisma.book.findMany({
    orderBy: { id: 'asc' },
  });
  // Prisma ya devuelve objetos con las mismas claves del modelo
  return books;
}
export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book) {
    const error = new Error('Book not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}
export async function createBook(data: CreateBookRequest): 
Promise<Book> {
  // Validaciones de negocio
  if (data.price <= 0) {
    const error = new Error('Price must be greater than 0');
    (error as any).statusCode = 400;
    throw error;
  }
  const created = await prisma.book.create({
    data: {
      title: data.title,
      author: data.author,
      price: data.price,
    },
  });
  return created;
}
export async function updateBook(id: number, updateData: 
UpdateBookRequest): Promise<Book> {
  if (updateData.price !== undefined && updateData.price <= 0) {
    const error = new Error('Price must be greater than 0');
    (error as any).statusCode = 400;
    throw error;
  }
  try {
    const updated = await prisma.book.update({
      where: { id },
      data: {
...(updateData.title !== undefined ? { title: updateData.title } : {}),
...(updateData.author !== undefined ? { author: updateData.author } : {}),
...(updateData.price !== undefined ? { price: updateData.price } : {}),
      },
    });
    return updated;
  } catch (e: any) {
    // Prisma error P2025 = Record not found
    if (e.code === 'P2025') {
      const error = new Error('Book not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
