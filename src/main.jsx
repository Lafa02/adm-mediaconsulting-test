import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "@/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen py-24">
        <div className="max-w-[1200px] w-full">
          <App />
        </div>
      </div>
    </Provider>
  </StrictMode>
);
