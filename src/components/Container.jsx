import React from "react";

const Container = ({children}) => {
  return (
   <div className="w-full px-6 sm:px-8 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
