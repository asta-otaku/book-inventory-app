import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#171717]">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <p className="text-2xl font-bold text-white">Page Not Found</p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Notfound;
