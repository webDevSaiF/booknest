import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../../../components/AddToCartButton";
import { BookProps } from "../../../types/type";
type PageProps = {
  params: Promise<{ id: string }>;
};

const URL = "http://localhost:5000/docs";

const getFeaturedBooks = async (): Promise<BookProps[]> => {
  const response = await fetch(URL);
  return response.json();
};

const BookDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const allBooks = await getFeaturedBooks();
  const book = allBooks.find((book: BookProps) => book.id === id);
  if (!book) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/books" className="btn btn-ghost mb-6">
        ← Back to Books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Cover */}
        <div>
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

        {/* Details */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">{book.title}</h1>
          {book.subtitle && (
            <p className="text-xl text-gray-500 mt-2">{book.subtitle}</p>
          )}

          <div className="divider"></div>

          <div className="space-y-4">
            <p>
              <strong className="inline-block w-40">Authors:</strong>{" "}
              {book.author_name?.join(", ")}
            </p>
            <p>
              <strong className="inline-block w-40">First Published:</strong>{" "}
              {book.first_publish_year}
            </p>
            <p>
              <strong className="inline-block w-40">Editions:</strong>{" "}
              {book.edition_count}
            </p>
            <p>
              <strong className="inline-block w-40">Languages:</strong>{" "}
              {book.language?.join(", ").toUpperCase()}
            </p>
          </div>

          <AddToCartButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
