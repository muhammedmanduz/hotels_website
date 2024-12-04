import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  //query client sağlayıcısınu kur
  <QueryClientProvider client={query}>
    <App />
    {/* Geliştiric araçları */}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    {/* Bildirim */}
    <ToastContainer/>

    {/* Geliştirici araçları  */}
  </QueryClientProvider>
);
