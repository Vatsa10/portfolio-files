import React from "react";
import NavBar from "./Navbar";

const settings = {
    name: "VJ",
    nav_item: [
      { link: "/about", label: "About" },
      { link: "/projects", label: "Projects" },
    ],
    cta_link: "mailto:vatsajoshi2@gmail.com",
    cta_label: "Contact",
  };

export default async function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}