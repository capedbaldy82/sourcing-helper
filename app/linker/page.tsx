'use client';

import { useState } from 'react';
import iconv from 'iconv-lite';

const Linker = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value);
  };

  const searchKeywordToAllLink = (e: any) => {
    e.preventDefault();
    console.log(searchKeyword);

    const keywordToEucKrToHex = (value: string) => {
      const encodedEUCKR = iconv.encode(value, 'euc-kr');
      const encodedHexArray = [];

      for (let i in encodedEUCKR) {
        if (!isNaN(+i)) {
          encodedHexArray.push('%' + encodedEUCKR[i].toString(16).toUpperCase());
        }
      }

      return encodedHexArray.join('');
    };

    const links = [
      `https://www.coupang.com/np/search?component=&q=${searchKeyword}&channel=user`,
      `https://domeggook.com/main/item/itemList.php?sw=${keywordToEucKrToHex(
        searchKeyword
      )}&sf=ttl&mnp=&mxp=&mnq=&mxq=&dfos=false`,
    ];

    for (let link of links) {
      console.log(link);
      window.open(link);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={searchKeywordToAllLink} className="mb-2">
        <input
          type="text"
          onChange={onChangeSearchKeyword}
          value={searchKeyword}
          className="p-2 text-lg bg-black border border-white text-white rounded-md mr-2"
          spellCheck={false}
        />
        <button type="submit" className="p-2 text-lg border border-white rounded-md">
          열기
        </button>
      </form>
      <p>* 팝업을 허용해주셔야 사용 가능한 기능입니다</p>
      <p>* 현재 쿠팡 및 도매꾹 멀티 링크를 제공합니다</p>
    </div>
  );
};

export default Linker;
