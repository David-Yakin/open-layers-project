import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ThemeProvider from "./features/theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
