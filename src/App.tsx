
import React from "react";
import { CustomResult } from "./AntDComponets/index";
import "./App.less";
function App() {
  return (
    <CustomResult
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      
    />
  );
}

export default App;
