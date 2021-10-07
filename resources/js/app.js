import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { BrowserRouter } from "react-router-dom";

// import "./styles/style.css";


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
