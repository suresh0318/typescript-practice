import React from "react";
import BtnColor from "./BtnColor";
import Grid from "./Grid";
import Strings from "./Strings";
import Table from "./Table";
import Toast from "./Toast";

const App = () => {
  return (
    <div>
      <Toast />
      <Grid /> 
      <Strings />
       <BtnColor /> 
       <Table /> 
    </div>
  );
};

export default App;
