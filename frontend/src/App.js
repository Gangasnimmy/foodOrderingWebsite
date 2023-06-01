import AppRoutes from "./AppRoutes";
import React, { useState } from "react";
import Header from "./components/Header/Header";
//import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <AppRoutes />
    </>
  );
}

export default App;
