import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import "./styles/theme.css";
import "./styles/components.css";

import { FileProvider } from "./context/FileContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FileProvider>
    <App />
  </FileProvider>
);