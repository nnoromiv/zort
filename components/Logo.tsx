import { LOGO } from '@/images';
import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <Image
        src={LOGO}
        alt='zort logo'
        width={100}
        height={100}
    />
  );
};

export default Logo