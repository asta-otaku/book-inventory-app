import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-[#011222] text-white flex justify-between items-center text-lg md:text-2xl">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
