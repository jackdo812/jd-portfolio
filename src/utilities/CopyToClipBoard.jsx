import React, { useState } from 'react';

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
    <div>
      <p>Email: {email}</p>
      <button className='p-2 border bg-green-100 rounded-xl' onClick={copyToClipboard}>
        {isCopied ? 'Email Copied!' : 'Copy my Email'}
      </button>
    </div>
  );
}

export default CopyToClipboard;
