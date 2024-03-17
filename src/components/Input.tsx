import { useState } from "react";

const Input = ({ searchBooks }: { searchBooks: any }) => {
  const [search, setSearch] = useState("");

  // create a function to handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
    searchBooks(search);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 md:w-[400px] flex items-center"
      >
        <input
          type="text"
          placeholder="Search for books..."
          autoComplete="off"
          className="p-3 rounded-l-lg border-none outline-none w-3/4 text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#0C0C0C] border-none outline-none p-3 w-1/4 rounded-r-lg"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Input;
