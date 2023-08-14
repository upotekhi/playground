import React from "react";
import { Button } from "@blueprintjs/core";

const LoginButton = () => {
  return (
    <div className="LoginButton">
      <Button
        text="Login"
        intent="primary"
        onClick={() => console.log("Button clicked")}
      />
    </div>
  );
};

export default LoginButton;
