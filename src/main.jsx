import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/common";
import { BrowserRouter } from "react-router-dom";
import Routes from "@/routes";

const rootComponent = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

createRoot(document.getElementById("root")).render(rootComponent);
