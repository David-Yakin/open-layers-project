import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
