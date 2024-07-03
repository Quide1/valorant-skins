'use client';
import React, { useState, useEffect } from 'react';

import { weaponsItems } from '@/data/weapons';
import { InterfaceWeaponList } from '@/types/weaponType';
import NavBarHeader from './NavBarItemHeader';
import NavBarAccordion from './NavBarAccordion';

function SheetMenu() {
  const [categories, setCategories] = useState<{ [key: string]: InterfaceWeaponList[] }>({});

  useEffect(() => {
    const categorizedWeapons = weaponsItems.reduce((acc, weapon) => {
      if (!acc[weapon.category]) {
        acc[weapon.category] = [];
      }
      acc[weapon.category].push(weapon);
      return acc;
    }, {} as { [key: string]: InterfaceWeaponList[] });

    setCategories(categorizedWeapons);
  }, []);

  return (

        <ul className="border-2 border-blue-500">
          <li><NavBarHeader textParagraph="Weapons" /></li>
          {Object.entries(categories).map(([category, weapons], index) => (
            <NavBarAccordion key={index} accordionTitle={category} weapons={weapons} />
          ))}
          <li><NavBarHeader textParagraph="Collectibles" /></li>
        </ul>

  );
}

export default SheetMenu;
