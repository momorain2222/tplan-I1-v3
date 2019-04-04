import React, { Component } from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-grey mt-1 p-3 text-center">
      Copyright &copy; {new Date().getFullYear()} Hijacks Team
    </footer>
  );
};

export default Footer;
