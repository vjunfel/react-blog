import Data from "./Data";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs" element={<Data />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App; 