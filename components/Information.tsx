import { FEATHERL, FEATHERR } from '@/images'
import Image from 'next/image'
import React, { FC } from 'react'
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import { IInformationType } from '@/types'

const Information: FC<IInformationType> = ({ title, icon, headline, description}) => {
  return (
    <div className='relative z-11 mt-10 flex items-center justify-center'>
        <Image
            alt='feather'
            src={FEATHERL}
            width={50}
            className='text-white max-[769px]:w-9'
            height={50}
        />
        <div className='text-white text-center'>
            <p>{title}</p>
            {
                icon ?
                <div className='flex '>
                    <IconStarFilled />
                    <IconStarFilled />
                    <IconStarFilled />
                    <IconStarFilled />
                    <IconStarHalfFilled />
                </div>
                :
                <p className='font-bold text-2xl max-[769px]:text-sm'>{headline}</p>
            }
            <p>{description}</p>
        </div>
        <Image
            alt='feather'
            src={FEATHERR}
            width={50}
            className='max-[769px]:w-9'
            height={50}
        />
    </div>
  )
}

export default Information