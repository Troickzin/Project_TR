import { BrowserRouter } from "react-router-dom";

import AnimateRoutes from "./Routes/routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
    </>
  );
}
