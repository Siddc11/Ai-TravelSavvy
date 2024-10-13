import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between item-center p-5">
      <img src="logo.svg" alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
