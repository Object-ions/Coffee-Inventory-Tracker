// import './App.css';
import React from "react";
import Header from "./Header";
// import CoffeeControl from "./CoffeeControl";
import CoffeeList from "./CoffeeList";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <CoffeeControl /> */}
      <CoffeeList />
    </React.Fragment>
  );
}

export default App;
