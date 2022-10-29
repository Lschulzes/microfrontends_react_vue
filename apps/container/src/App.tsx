import { StylesProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { mount } from "marketing/MarketingIndex";
import { useEffect } from "react";
export const App = () => {
  useEffect(() => {
    const el = document.querySelector("#root");
    if (el) {
      mount(el);
    }
  }, []);
  return <h1>{"Hello World"}</h1>;
};

export default App;
