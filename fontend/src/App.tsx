import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./component/presentation";
import Signup from "./pages/signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
