import React, { useState, useEffect } from "react";
import ReactRouter from "./components/ReactRouter"; 

import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <main className="app">
      <ReactRouter />
    </main>
  );
}

export default App;
