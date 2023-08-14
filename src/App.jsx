/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import  Pet from './components/Pet';
import Search from "./components/Search";
import Counter from "./components/Counter";







const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      {/* <Search /> */}
      {/* <Pet name="chihua" type="oddiy" meal="suyak" /> */}
      <Counter />
    </div>
  )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
