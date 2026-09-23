import type { BookProps } from "../types/type";
import BookCard from "./BookCard";

const URL = "http://localhost:5000/docs";
const getFeaturedBooks = async (): Promise<BookProps[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(URL, { cache: "no-store" });
  return response.json();
};

const BookList = async () => {
  const books = await getFeaturedBooks();
  return (
    <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book}></BookCard>
      ))}
    </div>
  );
};

export default BookList;
