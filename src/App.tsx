import React from "react";
import { BrowserRouter } from "react-router-dom";
import externalRoutes from "./routes/external";

const App: React.FC = () => {
  return (
    <BrowserRouter>
     {externalRoutes}
    </BrowserRouter>
  );
};

export default App;
