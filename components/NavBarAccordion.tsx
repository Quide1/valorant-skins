'use client'

import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CaretRight from '@/icons/CaretRight'
import Link from 'next/link'
import Crosshair from '@/icons/Crosshair'
import { InterfaceWeaponList } from '@/types/weaponType';

type NavBarAccordionProps = {
  accordionTitle: string,
  weapons: InterfaceWeaponList[]
}


function NavBarAccordion({ accordionTitle, weapons }: NavBarAccordionProps) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger >{accordionTitle}</AccordionTrigger>
          <AccordionContent className=' mb-2 flex flex-col gap-4 border-2 border-red-500' >
            {weapons.map(({displayName,uuid}, index) => {
              return (
              <Link className='flex flex-row gap-2 hover:translate-x-2 transition-all' key={uuid} href={`/weapons/${displayName}`}>
                <CaretRight /><p>{displayName}</p>
              </Link>
              )
            })}

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default NavBarAccordion
