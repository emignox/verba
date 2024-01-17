
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./component/presentation";
import Signup from "./pages/signup";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
