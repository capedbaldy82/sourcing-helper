'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [nav, setNav] = useState('home');

  const onClickNav = (value: string) => {
    setNav(value);
  };

  return (
    <header className="flex flex-col">
      <h1 onClick={() => onClickNav('home')} className="text-center text-4xl my-16 text-purple-500">
        <Link href="/">Sourcing Helper</Link>
      </h1>
      <ul className="flex justify-around pb-8 mb-16 border-b border-purple-500">
        <li
          onClick={() => onClickNav('linker')}
          className={`${nav === 'linker' ? 'text-purple-500' : 'text-white'}`}>
          <Link href="/linker">멀티플 링커</Link>
        </li>
        <li
          onClick={() => onClickNav('inquire')}
          className={`${nav === 'inquire' ? 'text-purple-500' : 'text-white'}`}>
          <Link href="/inquire">기능 등록 문의</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
