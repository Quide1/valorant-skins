"use client";
import HamburgerMenu from "@/icons/HamburgerMenu";
import { Button } from "./ui/button";
import Cross from "@/icons/Cross";
import { useState, useEffect } from "react";
import SheetMenu from "./SheetMenu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(()=>{
    console.log(isOpen)
  },[isOpen])
  useEffect(() => {

    const handleResize = () => {
      const isLgScreen = window.innerWidth >= 992; 
      setIsLargeScreen(isLgScreen);
    
    };


    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }


    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []); 

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full min-h-[5vh] bg-slate-600 flex flex-row justify-end items-center p-2">
      <Button
        aria-label="button to open menu"
        variant={"ghost"}
        size={"icon"}
        onClick={toggleIsOpen}
        className={`${isOpen || isLargeScreen ? "hidden" : ""}`}
      >
        <HamburgerMenu />
      </Button>
      <aside
        className={`absolute bg-red-700 h-screen w-9/12 top-0 left-0 max-w-[250px] flex flex-col transform transition-transform duration-300 ease-in-out p-2 ${
          isOpen || isLargeScreen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between p-2 bg-red-400 items-center h-10">
          <h2>Valorant Skins</h2>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={`border-2 border-black ${
              !isOpen || isLargeScreen ? "hidden" : ""
            }`} // Show cross only when closed on small screens
            onClick={toggleIsOpen}
          >
            <Cross />
          </Button>
        </div>
        <section>
          <SheetMenu/>
        </section>
      </aside>
    </header>
  );
}

export default NavBar;
