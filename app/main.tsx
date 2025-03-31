"use client"

import { Home } from '@/components'
import React, { useEffect, useState } from 'react'
import { HeroUIProvider } from "@heroui/react";
import Loader from '@/components/Loader';

const App = () => {
  const [ load, setLoad ] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoad(false)
        }, 3000)

        return () => clearTimeout(timeoutId)
    },[])
  return (
    load ?
    <Loader />
    :
    <HeroUIProvider>
        <main className='font-prompt'>
          <Home />
        </main>
    </HeroUIProvider>
  )
}

export default App