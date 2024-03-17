import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${id}&key=${
        import.meta.env.VITE_SOME_VALUE
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data.items);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto w-full flex items-center justify-center p-4 my-12 flex-wrap gap-5">
        {books.map((book: any) => (
          <div key={book.id} className="rounded-lg p-4 md:p-8 bg-white">
            <div>
              <img
                className="w-[100px] h-[150px] md:w-[150px] md:h-[200px] rounded-lg shadow-lg object-cover"
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
              />
            </div>
            <div>
              <h5 className="pt-3 font-bold text-lg md:text-xl">
                Title: {book.volumeInfo.title}
              </h5>
              <p
                className={`${
                  book.volumeInfo.subtitle ? "text-base" : "hidden"
                }`}
              >
                Subtitle: {book.volumeInfo.subtitle}
              </p>
              <p className="">
                {book.volumeInfo.authors.length > 1 ? "Authors" : "Author"}:{" "}
                {book.volumeInfo.authors}
              </p>
              <p className="mb-3">
                Book published on:
                <span className="ml-2">{book.volumeInfo.publishedDate}</span>
              </p>

              <p className="pt-2 text-justify leading-8 font-light line-clamp-6">
                <span>{book.volumeInfo.description}</span>
              </p>

              <a href={book.volumeInfo.infoLink} target="_blank">
                <button className="bg-[#0C0C0C] px-6 py-1 text-white text-center rounded-xl mt-4">
                  Continue
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookDetails;
