import { Request, Response, NextFunction } from 'express';
import { Book, CreateBookRequest, UpdateBookRequest, 
BookResponse, BookListResponse } from '../types/book.types';
import * as bookService from '../services/book.service';


export async function getAllBooks(req: Request, res: 
Response<BookListResponse>, next: NextFunction) {
  try {
    const books = await bookService.getAllBooks();
    res.json({
      books,
      total: books.length
    });
  } catch (error) {
    next(error);
  }
}
export async function getBookById(req: Request, res: 
Response<BookResponse>, next: NextFunction) {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    res.json({
      ...book,
      message: 'Book retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function createBook(
   req: Request<{}, BookResponse, CreateBookRequest>,
   res: Response<BookResponse>,
   next: NextFunction
) {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({
      ...newBook,
      message: 'Book created successfully'
    });
  } catch (error) {
    next(error);
  }
}
export async function updateBook(
  req: Request<{ id: string }, BookResponse , UpdateBookRequest >,
  res: Response<BookResponse>,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const updatedBook = await 
bookService.updateBook(id, req.body);
    res.json({
      ...updatedBook,
      message: 'Book updated successfully'
    });
  } catch (error) {
    next(error);
  }
}