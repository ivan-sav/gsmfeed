import React from "react";
import { Footer } from "./Footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[#030509] overflow-hidden max-w-[1440px] m-auto">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
