"use client";
import HamburgerMenu from "@/icons/HamburgerMenu";
import SheetMenu from "./NavBarContent";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

function NavBarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <HamburgerMenu className="text-red-600" />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-slate-800">
        <ScrollArea className="h-full w-full  ">
          <Link href={"/"} className="w-full">
            <SheetHeader className="flex flex-row justify-center text-lg gap-4  items-center h-10">
              <SheetTitle className="text-red-600">Vaskins</SheetTitle>
              <picture className='max-w-8'>
                <img src="/ValorantLogo.png" alt="valorant logo" />
              </picture>
            </SheetHeader>
          </Link>
          <ul className={`mt-2 mb-2 text-gray-400 flex  flex-col`}>
            <SheetMenu />
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default NavBarMobile;
