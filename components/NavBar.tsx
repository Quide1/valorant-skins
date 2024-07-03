"use client";

import NavBarMobile from "@/components/NavBarMobile"
import NavBarDesktop from "./NavBarDesktop";
function NewNavBar() {

    return (
        <header className="w-full min-h-[5vh] bg-slate-800  flex flex-row justify-end items-center p-2">
            <NavBarMobile/>
            <NavBarDesktop/>
        </header>
    )
}


export default NewNavBar
