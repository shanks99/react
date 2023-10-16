import React from "react";
import {Routes, Route, Link} from "react-router-dom" // Routes, Route, Link 사용
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* Link는 '<a>' 개념. to는 'href' Attr
      */}
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Link의 to를 => Route의 path와 연결 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
