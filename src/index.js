import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Register from "./Register";
const Add = React.lazy(() => import("./component/Todo/Add"));
//import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <React.StrictMode> */}
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/todo"
        element={
          <Suspense fallback={<div>Loading....</div>}>
            <Add />
          </Suspense>
        }
      />
      {/* </React.StrictMode> */},
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
