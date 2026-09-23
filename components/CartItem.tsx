import { BookProps } from "../types/type";
import RemoveFromCartButton from "./RemoveFromCartButton";

const CartItem = ({ book }: { book: BookProps }) => {
  return (
    <div className="flex bg-base-100 shadow-sm items-center p-5">
      <div className="max-w-[10%]">
        {book.cover_i ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
            className="w-full rounded-lg shadow-md"
          />
        ) : (
          <div className="w-full aspect-[2/3] bg-base-200 rounded-lg flex items-center justify-center">
            No Cover
          </div>
        )}
      </div>
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
          <RemoveFromCartButton book={book}></RemoveFromCartButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
