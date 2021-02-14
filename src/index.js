import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

// const name = `Keks`;
// const element = (name) => <h1>Hello, {name}</h1>;
const cardsCount = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
    // element(name),
    <App
      name={cardsCount}
    />,
    document.getElementById(`root`)
);
