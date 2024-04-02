import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import Red from "./Red"
import Blue from "./Blue"
import Yellow from "./Yellow"
import Green from "./Green"

function App() {
  return (
    <>
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/green">Green</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/yellow" element={<Yellow/>} />
          <Route path="/green" element={<Green/>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
