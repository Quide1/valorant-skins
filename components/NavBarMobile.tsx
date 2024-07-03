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

function NavBarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <HamburgerMenu className="text-red-600" />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-slate-800">
        <ScrollArea className="h-full w-full  ">
          <SheetHeader>
            <SheetTitle className="text-red-600">Valorant skins</SheetTitle>
          </SheetHeader>
          <ul className={`mt-2 mb-2 text-gray-400 flex  flex-col`}>
            <SheetMenu />
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default NavBarMobile;
