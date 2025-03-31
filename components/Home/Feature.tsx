import Image from 'next/image'
import React, { FC } from 'react'
import IButton from '../IButton'
import { IFeatureTypes } from '@/types'

const Feature: FC<IFeatureTypes> = ({image, icon, title, description, reversed }) => {
  return (
    <div className={`w-full flex my-3 mx-2 justify-center items-center ${reversed ? 'flex-row-reverse max-[1026px]:text-right' : 'flex-row'} max-[769px]:flex-col-reverse`}>
        <Image
            src={image}
            className='w-1/3 max-[769px]:w-[400px] max-sm:w-[300px]'
            width={100}
            height={100}
            alt='feature'        
        />

        <div className={`text-white mt-3 w-[700px] px-3 flex flex-col h-full justify-between gap-12 max-[1026px]:gap-4 ${reversed ? 'max-[1026px]:items-end' : 'max-[1026px]:items-start'} max-sm:w-full`}>
            <span className='bg-light-gray w-10 h-10 flex justify-center items-center rounded-full'>
                {icon}
            </span>
            <h2 
                className='font-bold text-4xl max-[1026px]:text-2xl max-[769px]:text-xl'
                >
                    {title}
            </h2>
            <p
                className='text-lg max-[1026px]:!text-sm max-[769px]:!text-xs'
                >
                    {description}
            </p>
            <div className='flex justify-between max-[1025px]:justify-around gap-4 max-[376px]:flex-col'>
                <IButton buttonText='Download App' className="w-60 max-[769px]:w-40 max-[376px]:w-full text-sm transform rounded-lg border border-primary bg-primary px-6 py-2 font-bold transition-all duration-300 hover:bg-white hover:border-white hover:!text-primary dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900" />
                <IButton buttonText='Learn More' className="w-60 max-[769px]:w-40 max-[376px]:w-full text-sm transform rounded-lg border border-black bg-black px-6 py-2 font-bold transition-all duration-300 hover:bg-white hover:border-white hover:!text-black dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900" />
            </div>
        </div>
    </div>
  )
}

export default Feature