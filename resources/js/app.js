import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap';
import "./../../public/css/app.css";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
