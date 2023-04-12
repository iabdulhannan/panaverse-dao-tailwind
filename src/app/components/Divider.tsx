import React from 'react';

function Divider({className}: {className?: string}) {
  return (
    <div className={`${className} bg-gray-200 w-full m-1 h-px`}>
    </div>
  );
}

export default Divider;
