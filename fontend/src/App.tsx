import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./component/presentation";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Settings from "./component/settings";
import Profile from "./pages/otherProfile";
import Search from "./pages/searchUser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/searchUser" element={<Search />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
