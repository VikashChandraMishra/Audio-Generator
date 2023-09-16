import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Navbar from "./components/layout/navigation/navbar/Index";

import Home from "./components/pages/Home";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import TryNow from "./components/pages/TryNow";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />

          <Route
            exact
            path="/login"
            element={<Login />}
          />

          <Route
            exact
            path="/try-now"
            element={<TryNow />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;