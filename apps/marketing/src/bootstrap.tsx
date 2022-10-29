import React from "react";
import ReactDOM from "react-dom";
import { Button } from "ui";

const App = () => {
  return (
    <>
      <h1>{"Hello"}</h1>
      <h2>{"World"}</h2>
      <Button>Say Hi</Button>
    </>
  );
};

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#marketing-dev-root");
  if (el) {
    mount(el);
  }
}
