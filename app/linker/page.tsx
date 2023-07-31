'use client';

import { useState } from 'react';
import iconv from 'iconv-lite';
import Image from 'next/image';

const Linker = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value);
  };

  const searchKeywordToAllLink = (e: any) => {
    e.preventDefault();

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
      )}&sf=ttl&mnp=500&mxp=6000&mnq=&mxq=&dfos=false`,
    ];

    for (let link of links) {
      window.open(link);
    }

    setSearchKeyword('');
  };

  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center mb-20 w-2/3">
        <p className="text-purple-500 mb-4 text-2xl">키워드 검색</p>
        <form onSubmit={searchKeywordToAllLink} className="flex flex-col w-full mb-2 space-y-2">
          <input
            type="text"
            onChange={onChangeSearchKeyword}
            value={searchKeyword}
            className="w-full p-2 text-lg bg-black border border-white text-white rounded-md mr-2 placeholder:text-base focus:outline-purple-500"
            spellCheck={false}
            placeholder="키워드"
          />
          <button type="submit" className="p-2 text-lg border border-white rounded-md">
            열기
          </button>
        </form>
        <p>
          * <span className="text-purple-500">팝업을 허용</span>해주셔야 사용 가능한 기능입니다
        </p>
      </section>
      <section className="flex justify-around mb-20 w-full">
        <article className="flex flex-col items-center">
          <p className="text-purple-500 mb-4">멀티 검색 사이트</p>
          <div className="flex space-x-4">
            <Image src="/coupang.png" alt="coupang" width={35} height={35} className="rounded-md" />
            <Image
              src="/domeggook.png"
              alt="domeggook"
              width={35}
              height={35}
              className="rounded-md"
            />
          </div>
        </article>
        <article className="flex flex-col items-center">
          <p className="text-purple-500 mb-4">검색 조건</p>
          <div className="flex flex-col">
            <p>* 쿠팡: 일반 검색</p>
            <p>* 도매꾹: 국내 배송 및 500원 ~ 6000원 상품</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Linker;
