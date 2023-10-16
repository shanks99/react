import React from "react";
import {Routes, Route, Link} from "react-router-dom" // Routes, Route, Link 사용
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import InputMulti from "./pages/InputMulti";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      {/* Link는 '<a>' 개념. to는 'href' Attr
      */}
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/inputMulti">InputMulti</Link> | <Link to="/list">List</Link>
      </nav>

      {/* Link의 to를 => Route의 path와 연결 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/inputMulti" element={<InputMulti />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
