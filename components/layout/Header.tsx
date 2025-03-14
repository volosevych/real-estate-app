"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  User,
  Heart,
  Search,
} from "lucide-react";

// Custom UI Button component
import Button from "../ui/Button";

// Navigation Links Array
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/property", label: "Property" },
  { href: "/blog", label: "Blog" },
  { href: "/pages", label: "Pages" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="">
      <div className="bg-(--dark-blue) font-links text-sm px-3 md:py-0 py-3 text-white">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="md:flex md:items-center items-start md:gap-8 flex-col md:flex-row gap-2 hidden">
              <address className="flex items-center gap-1">
                <MapPin width={18} height={18} className="md:block hidden" />
                254 Lillian Blvd, Holbrook
              </address>

              <a
                href="mailto:info@santizex-site.com"
                className="flex items-center gap-2"
              >
                <Mail width={18} height={18} className="md:block hidden" />
                info@santizex-site.com
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Link href="/">
                <Facebook
                  width={17}
                  height={17}
                  className="hover:text-(--red-active) transition duration-300"
                />
              </Link>
              <Link href="/">
                <Twitter
                  width={17}
                  height={17}
                  className="hover:text-(--red-active) transition duration-300"
                />
              </Link>

              <Button text="Add Listings" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-8 flex justify-between items-center px-3.5">
          {/* Logo */}
          <Link href="/" className="flex gap-2">
            <Image src="/images/logo.png" width={45} height={35} alt="logo" />
            <span className="font-bold text-3xl">Quarter</span>
          </Link>

          {/* Nav Links */}
          <nav className="lg:flex gap-8 items-center hidden">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-bold text-lg hover:text-(--red-active) transition duration-300 font-links"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/user"
                className="shadow-md p-2 hover:bg-(--red-active) duration-300 hover:text-white"
              >
                <User width={16} height={16} />
              </Link>
              <Link
                href="/likes"
                className="shadow-md p-2 hover:bg-(--red-active) duration-300 hover:text-white"
              >
                <Heart width={16} height={16} />
              </Link>
              <Link
                href="/search"
                className="shadow-md p-2 hover:bg-(--red-active) duration-300 hover:text-white"
              >
                <Search width={16} height={16} />
              </Link>
            </div>
          </nav>

          <button
            className="relative z-50 lg:hidden flex flex-col justify-between w-7.5 h-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-[3px] bg-(--red-active) rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[3px] bg-(--red-active) rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-[3px] bg-(--red-active) rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] right-0 h-full w-[250px] z-[90] bg-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Mobile Nav Links */}
        <nav className="mt-16 flex flex-col items-start p-6 space-y-4 relative z-[100]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-lg font-semibold hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}

          {/* User, Likes, and Search Icons */}
          <div className="flex flex-col gap-4 mt-4">
            <Link
              href="/user"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <User width={20} height={20} />
              <span>User</span>
            </Link>
            <Link
              href="/likes"
              className="flex items-center gap-2 hover:text-red-500"
            >
              <Heart width={20} height={20} />
              <span>Favorites</span>
            </Link>
            <Link
              href="/search"
              className="flex items-center gap-2 hover:text-gray-700"
            >
              <Search width={20} height={20} />
              <span>Search</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
