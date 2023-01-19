import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <span>Copyright &copy; {date} </span>
      <span> By: Junfel Velasco </span>
    </div>
  );
}

export default Footer;
