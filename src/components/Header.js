import React from "react";

// Define the Header component
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

// Export it so App.js can use it
export default Header;
