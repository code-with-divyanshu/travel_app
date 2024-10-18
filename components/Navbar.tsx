"use client";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" alt="Logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {!mobileMenu && (
        <Image
          src="/menu.svg"
          alt="Menu Bar"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      {mobileMenu && (
        <ul className="absolute shadow-2xl rounded-s-md bg-blue-300 right-0 top-0 w-[50%] h-[100vh]">
          <Image
            src="close.svg"
            alt="Menu Bar"
            width={42}
            height={42}
            className="absolute right-0 top-0 inline-block cursor-pointer lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          />

          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="relative top-10 py-10 regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
