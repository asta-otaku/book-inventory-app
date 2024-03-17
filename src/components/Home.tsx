import { useState } from "react";
import BookList from "./BookList";
import Input from "./Input";
import Navbar from "./Navbar";
import useFetch from "./UseFetch";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [term, setTerm] = useState("Anything");
  const {
    data: books,
    isLoading,
    error,
  } = useFetch(
    `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${
      import.meta.env.VITE_SOME_VALUE
    }`
  );

  return (
    <div>
      <>
        <Navbar />
        <div className="bg-[url(./img/cover.jpg)] bg-no-repeat bg-center bg-cover w-full h-[650px] shadow-sm shadow-blacks">
          <div className="flex flex-col items-center justify-center bg-[#1501004d] h-full text-white">
            <h2 className="text-3xl md:text-5xl mb-5 capitalize">
              Books on {term}
            </h2>

            <p className="text-base md:text-lg max-w-[80%] text-center mb-4 px-2 lg:px-0">
              “Reading is an act of civilization; it's one of the greatest acts
              of civilization because it takes the free raw material of the mind
              and builds castles of possibilities.”
            </p>

            <Input searchBooks={(search: any) => setTerm(search)} />
          </div>
        </div>
        <div>
          {isLoading && (
            <div className="flex items-center justify-center mt-6 lg:mt-20">
              <Circles
                height="50"
                width="50"
                color="brown"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
        </div>

        <div className="max-w-screen-2xl mx-auto">
          {!isLoading && <BookList books={books} />}
        </div>
        {error && (
          <div className="text-center md:text-2xl font-mono font-bold mt-3">
            {error}
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
