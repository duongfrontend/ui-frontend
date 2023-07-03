import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const UIFrontend = document.getElementById("UI-FRONTEND");

// Create a root.
const UiFrontend = ReactDOMClient.createRoot(UIFrontend);

UiFrontend.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
