import React from "react";
import "./App.css";
import InputForm from "./InputForm.js";
import FinalResult from "./Result.js";

function App() {
  const [showFinal, setShowFinal] = React.useState();

  const handleCallBack = (val) => {
    setShowFinal(val);
  };

  return (
    <div className="App">
      {showFinal != true && <InputForm callBack={handleCallBack} />}
      {showFinal && <FinalResult />}
    </div>
  );
}

export default App;
