import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center container justify-between mx-auto h-14">
      <Link href="/">
        <h1 className="font-bold text-xl">Home</h1>
      </Link>

      <div className="flex gap-2">
        <Link href="/performance">Performance</Link>
        <Link href="/reliablitiy">Reliability</Link>
      </div>
    </nav>
  );
};

export default Navbar;
