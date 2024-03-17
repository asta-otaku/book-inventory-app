import { Link } from "react-router-dom";

const BookList = ({ books }: { books: any }) => {
  return (
    <div className="flex justify-center items-end flex-wrap gap-6 mt-8 md:mt-16 rounded-md px-5">
      {books.length > 0 ? (
        books.map((book: any) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <div className="bg-white rounded-xl hover:bg-slate-200 border border-solid border-white hover:border-blue-500 w-[300px]">
              <img
                className="rounded-t-xl"
                src={book.volumeInfo?.imageLinks?.smallThumbnail}
                alt={book.volumeInfo.title}
                style={{ width: "100%", height: "250px" }}
              />

              <div className="p-2">
                <div className="whitespace-nowrap truncate">
                  {book?.volumeInfo?.authors?.map((author: string) => (
                    <span key={author} className="mr-2 font-medium text-lg">
                      {author}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <h4 className="text-base font-normal">
                    {book?.volumeInfo?.categories}
                  </h4>
                  <p
                    className={`${
                      book?.volumeInfo?.pageCount ? "block" : "hidden"
                    }`}
                  >
                    {book?.volumeInfo?.pageCount} pages
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex items-center justify-center mt-6 lg:mt-20">
          <p className="text-2xl font-mono font-bold">No books found</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
