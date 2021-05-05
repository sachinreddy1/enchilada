import React from "react"
import './App.css';

import Footer from "./Footer";
import FloatingObject from "./FloatingObject";

function App() {
  return (
    <div >
      <svg className="app">
        <FloatingObject/>
      </svg>
      <Footer />
    </div>
  );
}

export default App;
