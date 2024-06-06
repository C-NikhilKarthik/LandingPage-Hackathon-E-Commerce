import React from "react";

export default function Footer() {
  return (
    <footer className="bg-shade-black pt-16 pb-4 px-4 md:px-10 lg:px-16 xl:px-24 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-20 text-white">
        <div className="flex flex-col md:flex-row gap-6 justify-between flex-1 w-full">
          <div className="font-bold text-lg">furni</div>
          <div className="flex text-cream text-xs gap-2 flex-col">
            <div className="font-semibold text-base">More</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
          <div className="flex text-cream text-xs gap-2 flex-col">
            <div className="font-semibold text-base">Collections</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
          <div className="flex text-cream text-xs gap-2 flex-col">
            <div className="font-semibold text-base">About</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[400px] gap-4 flex-none">
          <div className="font-semibold">Join Newsletter</div>
          <div className="flex gap-3">
            <input
              className="rounded-full py-1 px-2 border bg-transparent text-sm border-white"
              placeholder="Your Email Address"
            />
            <button className="rounded-full text-sm font-semibold bg-white text-shade-black px-2 py-1">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="text-xs">Copyright Furni, LLC 2023</div>
    </footer>
  );
}
