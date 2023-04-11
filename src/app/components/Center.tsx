import React from "react";

export function Center({className, children}: {className: string, children: React.ReactNode }) {
  return (
    <div className={`${className} flex justify-center items-center`}>
      {children}
    </div>
  );
}
