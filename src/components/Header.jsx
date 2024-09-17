import React from "react";
import LockIcon from "@mui/icons-material/Lock";

function Header() {
  return (
    <header>
      <h1>
        <LockIcon className="lock" /> NoteVault
      </h1>
    </header>
  );
}

export default Header;
