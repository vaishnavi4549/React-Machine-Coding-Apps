import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeatureFlagProvider } from "./Feature";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FeatureFlagProvider>
      <App />
    </FeatureFlagProvider>
  </StrictMode>
);
