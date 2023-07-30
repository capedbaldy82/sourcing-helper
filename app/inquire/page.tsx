'use client';

import Spinner from '@/components/common/Spinner';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Inquire = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_4bzkspe', 'template_odwihwj', form.current, 'h5VeZiOw_CRqo5Hj4').then(
      (result) => {
        setLoading(false);
        alert('이메일이 전송되었습니다');
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        alert('이메일 전송에 실패했습니다');
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 ">
        <label className="text-purple-500">이름</label>
        <input
          type="text"
          name="user_name"
          className="text-white bg-black border border-white focus:outline-purple-500 p-2"
          spellCheck={false}
        />
        <label className="text-purple-500">이메일</label>
        <input
          type="email"
          name="user_email"
          className="text-white bg-black border border-white focus:outline-purple-500 p-2"
          spellCheck={false}
        />
        <label className="text-purple-500">문의 사항</label>
        <textarea
          name="message"
          className="text-white bg-black border border-white focus:outline-purple-500 p-2 h-60 resize-none"
          spellCheck={false}
        />
        <button type="submit" value="Send" className="text-white border border-white p-2 h-12">
          {loading ? <Spinner /> : '전송'}
        </button>
      </form>
    </div>
  );
};

export default Inquire;
