import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CopyToClipboard({emailAdress}) {
  const email = emailAdress;
  const [isCopied, setIsCopied] = useState(false);


  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = email;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);
    setIsCopied(true);
  };

  return (
    <div className='flex flex-col justify-center my-8 pt-4 gap-3'>
      <p className='self-center'>Or email me at: <Link to={`mailto:${email}`} className='font-bold underline'>{email}</Link></p>
      <button className={`${isCopied ? 'copied-email-button' : 'primary-button'} w-fit self-center md:hover:primary-button-hover md:tranistion-all md:duration-500`} onClick={copyToClipboard}>
        {isCopied ? 'Email Copied!' : 'Copy my Email'}
      </button>
    </div>
  );
}

export default CopyToClipboard;
