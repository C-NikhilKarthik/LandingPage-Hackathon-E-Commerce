import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { BsCalendarDate } from "react-icons/bs";
import { IoPricetags } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import {
  PiArmchairDuotone,
  PiDeskDuotone,
  PiDresserDuotone,
} from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { FaRug } from "react-icons/fa6";
import { MdOutdoorGrill } from "react-icons/md";
import { Products } from "@/data/Products";
import ProductCards from "@/components/ProductCards";

export default function ProductsPage() {
  return (
    <main>
      <Navbar location={1} />
      <section className="px-4 md:px-10 lg:px-16 pt-24 pb-8">
        <div className="bg-[url('/ProductPage/ProductImage.png')] border border-shade-black relative w-full bg-cover h-[40vh] bg-center rounded-lg">
          <div className="absolute bottom-4 right-4 bg-shade-black/30 backdrop-blur rounded p-2 text-[clamp(30px,3vw,72px)] font-semibold">
            All Furni Chairs
          </div>
        </div>
      </section>

      <section className="px-4 text-shade-black md:px-10 lg:px-16 pb-8 flex gap-10 flex-col">
        <div className="w-full gap-4 md:p-0 flex flex-col md:flex-row md:items-center">
          <div className="md:w-[300px] flex-none font-semibold">
            Showing 112 Results
          </div>
          <div className="w-full flex-1 sm:flex-row flex-col flex sm:items-center gap-4">
            <div className="font-semibold">Sort by:</div>
            <div className="flex px-4 py-1 text-sm cursor-pointer items-center gap-3 border-2 rounded-full border-shade-black">
              <BsCalendarDate />
              Date
            </div>
            <div className="flex px-4 py-1 text-sm cursor-pointer items-center gap-3 border-2 rounded-full border-shade-black">
              <IoPricetags />
              Price
            </div>
            <div className="flex px-4 py-1 text-sm cursor-pointer items-center gap-3 border-2 rounded-full border-shade-black">
              <FaStar />
              Relevance
            </div>
          </div>
          <div className="px-4 w-fit py-1 rounded-full cursor-pointer border-2 text-sm font-semibold border-shade-black">
            Reset Filters
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row gap-6 md:gap-0">
          <div className="md:w-[300px] pr-0 md:pr-10 flex-none flex flex-col gap-3 font-semibold">
            <div className="rounded-full px-4 items-center cursor-pointer py-3 text-cream bg-shade-black gap-2 flex">
              <PiArmchairDuotone />
              Chairs
            </div>
            <div className="rounded-full px-4 items-center cursor-pointer py-3 hover:bg-[rgba(48,47,37,0.15)] transition-all duration-300 text-shade-black bg-[rgba(48,47,37,0.05)] gap-2 flex">
              <RiSofaLine />
              Sofa
            </div>
            <div className="rounded-full px-4 items-center cursor-pointer py-3 hover:bg-[rgba(48,47,37,0.15)] transition-all duration-300 text-shade-black bg-[rgba(48,47,37,0.05)] gap-2 flex">
              <PiDresserDuotone />
              Dresser
            </div>
            <div className="rounded-full px-4 items-center cursor-pointer py-3 hover:bg-[rgba(48,47,37,0.15)] transition-all duration-300 text-shade-black bg-[rgba(48,47,37,0.05)] gap-2 flex">
              <FaRug />
              Rugs
            </div>
            <div className="rounded-full px-4 items-center cursor-pointer py-3 hover:bg-[rgba(48,47,37,0.15)] transition-all duration-300 text-shade-black bg-[rgba(48,47,37,0.05)] gap-2 flex">
              <PiDeskDuotone />
              Tables
            </div>
            <div className="rounded-full px-4 items-center cursor-pointer py-3 hover:bg-[rgba(48,47,37,0.15)] transition-all duration-300 text-shade-black bg-[rgba(48,47,37,0.05)] gap-2 flex">
              <MdOutdoorGrill />
              Outdoors
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Products?.map((item, index) => (
              <ProductCards item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Products Page",
};
