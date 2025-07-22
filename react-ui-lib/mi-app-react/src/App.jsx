import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import './index.css';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Home />
    </div>
  );
}
