import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "./components/ClockHeading";
import ClockSllogan from "./components/ClockSllogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSllogan />
      <CurrentTime />
    </center>
  );
}

export default App;
