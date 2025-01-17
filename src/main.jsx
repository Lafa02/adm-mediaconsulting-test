import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen py-24">
        <div className="max-w-[1200px] w-full">
          <h1 className="text-4xl font-bold text-center mb-8">
            ADM Media Consulting Test{" "}
          </h1>
          <App />
        </div>
      </div>
      <Toaster />
    </Provider>
  </StrictMode>
);
