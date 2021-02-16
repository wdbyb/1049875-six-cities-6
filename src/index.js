import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const cardsCount = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
    <App
      cardsCount={cardsCount}
    />,
    document.getElementById(`root`)
);
