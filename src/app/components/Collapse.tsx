'use client'
import React, {useState, useTransition} from 'react';

function Collapse({children, className}: {
  children: React.ReactNode,
  className: string
}) {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div className="relative">
      <div onClick={handleToggle}
           className={`${className} overflow-hidden transition-max-h ease-in-out duration-500 ${show ? 'max-h-96' : 'max-h-20'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
