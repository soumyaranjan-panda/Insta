import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./utils/theme.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);
