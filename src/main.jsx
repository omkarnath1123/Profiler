// Fonts are bundled with the site, so visitors' browsers never call a third-party font host.
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cv from "./components/Cv";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
);
