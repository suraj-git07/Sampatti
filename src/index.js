import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: 'f2041ae4-6eb8-4b9d-bfd5-6117818e3291' }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LivepeerConfig client={client} >
      <App />
    </LivepeerConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
