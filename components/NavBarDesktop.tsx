import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Cross from "@/icons/Cross";
import SheetMenu from "./NavBarContent";
import { ScrollArea } from "@/components/ui/scroll-area"

function NavBarDesktop() {

    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])
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


    return (
        <aside
            className={`absolute bg-slate-800 h-screen w-9/12 top-0 left-0 max-w-[250px] flex flex-col transform transition-transform duration-300 ease-in-out p-6 border-r-2 border-white ${isOpen || isLargeScreen ? "translate-x-0" : "-translate-x-full"
                }`}
        >   
        <ScrollArea className="h-full w-full  ">
            <div className="flex flex-row justify-between text-lg  items-center h-10">
                <h2 className='font-bold text-red-600'>Valorant Skins</h2>
            </div>
            <section>
                <ul className={`mt-2 mb-2 text-gray-400 flex  flex-col`} >
                    <SheetMenu />
                </ul>
            </section>
            </ScrollArea>
        </aside>
    )
}

export default NavBarDesktop
