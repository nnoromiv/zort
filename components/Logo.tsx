import { LOGO } from '@/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link href={'#home'}>
      <Image
        src={LOGO}
        alt='zort logo'
        width={100}
        height={100}
      />
    </Link>
  );
};

export default Logo