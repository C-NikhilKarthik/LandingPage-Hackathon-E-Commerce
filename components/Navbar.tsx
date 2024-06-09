"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface LocationProps {
  location: number;
}
export default function Navbar({ location }: LocationProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={`fixed z-10 top-0 left-0 w-screen px-4 md:px-16 py-4 ${
        location === 0 ? "text-cream" : "text-black"
      }`}
    >
      <div
        className={`backdrop-blur flex justify-between p-4 rounded-lg ${
          location !== 0 ? "bg-cream/30" : "bg-shade-black/30"
        }`}
      >
        <div className="flex gap-4 items-center">
          <Link className="font-bold text-2xl" href={"/"}>
            furni
          </Link>
          <div className="md:flex hidden gap-6">
            <Link
              className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
                location === 0 ? "after:bg-cream" : "after:bg-black"
              }`}
              href={"/product-list"}
            >
              Collections
            </Link>
            <Link
              className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
                location === 0 ? "after:bg-cream" : "after:bg-black"
              }`}
              href={"#clearance"}
            >
              Clearance
            </Link>
            <Link
              className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
                location === 0 ? "after:bg-cream" : "after:bg-black"
              }`}
              href={"#about"}
            >
              About
            </Link>
          </div>
        </div>

        <div className="md:flex gap-4 hidden items-center">
          <PiShoppingCartDuotone
            className={`text-xl ${
              location !== 0 ? "text-shade-black" : "text-cream"
            }`}
          />
          <div
            className={`text-sm ${
              location !== 0 ? "text-shade-black" : "text-cream"
            }`}
          >
            EN
          </div>
          <div
            className={`rounded-full px-3 font-semibold text-sm py-1 ${
              location === 0
                ? "bg-cream text-shade-black"
                : "text-cream bg-shade-black"
            }`}
          >
            Contact us
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`flex md:hidden items-center p-1 ${
            location === 0 ? "text-cream" : "text-shade-black"
          }`}
        >
          <GiHamburgerMenu className="text-xl" />
        </button>
      </div>

      <motion.div
        className={`z-20 flex flex-col gap-4 absolute transition-all duration-500 p-4 left-0 top-0 backdrop-blur bg-shade-black/40 h-screen w-full ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex w-full justify-between">
          <Link
            className={`font-bold text-2xl ${
              location === 0 ? "after:bg-cream" : "after:bg-black"
            }`}
            href={"/"}
            onClick={() => setOpen(!open)}
          >
            furni
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center p-1 text-white"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
              location === 0 ? "after:bg-cream" : "after:bg-black"
            }`}
            href={"/product-list"}
            onClick={() => setOpen(!open)}
          >
            Collections
          </Link>
          <Link
            className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
              location === 0 ? "after:bg-cream" : "after:bg-black"
            }`}
            href={"#clearance"}
            onClick={() => setOpen(!open)}
          >
            Clearance
          </Link>
          <Link
            className={`flex flex-col after:block after:w-0 after:h-[2px] after:rounded hover:after:w-full after:transition-[width] after:duration-500 ${
              location === 0 ? "after:bg-cream" : "after:bg-black"
            }`}
            href={"#about"}
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
