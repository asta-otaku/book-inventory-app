import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Books/:id" element={<BookDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
