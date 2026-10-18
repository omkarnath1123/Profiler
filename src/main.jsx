import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cv from "./components/Cv";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
);
