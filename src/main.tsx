import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./features/theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ThemeProvider>
);
