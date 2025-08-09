export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  createdAt: Date;
}

export interface CreateBookRequest {
    title: string;
    author: string;
    price: number;  
}

export interface UpdateBookRequest {
    title?: string;
    author?: string;
    price?: number;  
}

export interface BookResponse {
    id: string;
    message: string;
}

export interface BookListResponse {
    books: Book[];
    total: number;
}