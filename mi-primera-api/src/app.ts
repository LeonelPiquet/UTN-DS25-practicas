import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';

const app = express();
const PORT = 3000;

//Midlewares globales
app.use(express.json());
app.use(logRequest);

//Routes
app.use('/api/books', bookRoutes);

//Error handler (siempre al final)
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});