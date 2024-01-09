import React, { useEffect, useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return <>{loader ? <div className="loader"></div> : <Home />}</>;
};

export default App;
