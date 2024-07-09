'use client'
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Cross from "@/icons/Cross";
import SheetMenu from "./NavBarContent";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

function NavBarDesktop() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLgScreen = window.innerWidth >= 1024;
      setIsLargeScreen(isLgScreen);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Check size on initial load
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {isLargeScreen && (
        <aside
          className="bg-slate-800 h-screen w-[260px] transform transition-transform duration-300 ease-in-out p-6 border-r-2 border-2 border-red-500 sticky top-0 flex flex-col"
        >
          <ScrollArea className="h-full w-full">
            <Link href="/" className="w-full">
              <div className="flex flex-row justify-center text-lg gap-4 items-center h-10">
                <h2 className="font-bold text-red-600">Vaskins</h2>
                <picture className="max-w-8">
                  <img src="/ValorantLogo.png" alt="valorant logo" />
                </picture>
              </div>
            </Link>
            <section>
              <ul className="mt-2 mb-2 text-gray-400 flex flex-col">
                <SheetMenu />
              </ul>
            </section>
          </ScrollArea>
        </aside>
      )}
    </>
  );
}

export default NavBarDesktop;
