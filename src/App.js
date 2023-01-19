import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home className="content" />
      <Footer />
    </div>
  );
}

export default App;
