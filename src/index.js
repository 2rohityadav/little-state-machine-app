import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Result from "./pages/Result";

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: "",
  },
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <StateMachineProvider>
      <DevTool />
      <div className="container">
        <h1>Form Wizzard</h1>
        <Router>
          <Pages />
        </Router>
      </div>
    </StateMachineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
