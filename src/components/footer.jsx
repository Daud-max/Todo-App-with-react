import React from "react";
function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer>
        <p>CopyRight &#9400; {year}</p>
      </footer>
    </>
  );
}
export default Footer;
