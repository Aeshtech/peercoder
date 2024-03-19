import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-[50px] flex items-center justify-between px-20 w-full border-b-[1px] border-b-[grey]">
      <Link href={"/"}>
        <h1 className="logo">PeerCoder</h1>
      </Link>
      <div className="flex-center gap-x-[10px]">
        <button>Camera</button>
        <button>Mic</button>
        <button>Room URL</button>
      </div>
    </header>
  );
};

export default Header;
