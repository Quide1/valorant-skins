'use client'

import React from 'react'

function NavBarItemHeader({textParagraph }:{textParagraph:string}) {
  return (
    <p className='text-red-600 font-bold text-sm'>
      {textParagraph}
    </p>
  )
}

export default NavBarItemHeader