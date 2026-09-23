import { Suspense } from "react";
import BookList from "../../components/BookList";
import Loading from "./loading";

const BooksPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">All Books</h1>
      <Suspense fallback={<Loading></Loading>}>
        <BookList></BookList>
      </Suspense>
    </>
  );
};

export default BooksPage;
