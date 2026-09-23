import Link from "next/link";
import { BookProps } from "../types/type";

const BookCard = ({ book }: { book: BookProps }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title border-b-2 pb-2">{book.title}</h2>
        <p className="flex gap-2 mt-4">
          <strong className="min-w-30">Author:</strong> {book.author_name?.[0]}
        </p>
        <p className="flex gap-2 mt-4">
          <strong className="min-w-30">Publish Year:</strong>{" "}
          {book.first_publish_year}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/books/${book.id}`} className="btn btn-primary">
            View Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
