"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Navbar location={0} />
      <div className="w-full h-full mask">
        <section className="relative h-screen w-full bg-[url('/Home/LandingImage.png')] z-0 overflow-hidden flex items-end bg-cover bg-center px-4 pb-10 md:px-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col"
          >
            <Link
              className="rounded-full hover:bg-cream/20 backdrop-blur px-[10px] py-[12px] w-fit border text-cream border-cream"
              href={"/"}
            >
              2024 Spring Sale
            </Link>
            <div className="text-white text-[clamp(40px,4vw,90px)] font-semibold">
              Crafting Your
            </div>
            <div className="text-white text-[clamp(40px,4vw,90px)] leading-8 md:leading-10 font-semibold">
              Perfect Heaven
            </div>
          </motion.div>
        </section>
      </div>

      <section
        id="collections"
        className="flex flex-col w-full px-4 md:px-16 pt-28 gap-16 py-10"
      >
        <div className="flex justify-between flex-col md:flex-row md:items-end gap-4 w-full">
          <div className="flex text-[clamp(28px,4vw,42px)] font-bold flex-col text-shade-black">
            <div className="leading-10">Discover Unparalleled</div>
            <div>Furniture Designs</div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 h-fit">
            <div className="rounded-full px-2 py-1 bg-shade-black text-cream font-semibold">
              All Products
            </div>
            <div className="rounded-full px-2 py-1 text-shade-black border-shade-black border cursor-pointer font-semibold">
              Living Rooms
            </div>
            <div className="rounded-full px-2 py-1 text-shade-black border-shade-black border cursor-pointer font-semibold">
              Bedroom
            </div>
            <div className="rounded-full px-2 py-1 text-shade-black border-shade-black border cursor-pointer font-semibold">
              Outdoor
            </div>
          </div>
        </div>

        <div className="gap-4 flex w-full px-0 md:px-4 lg:px-10 xl:px-16">
          <div className="basis-1/3 flex flex-col gap-2">
            <Image
              src={"/Home/Image1.png"}
              height={0}
              width={0}
              sizes="100%"
              className="aspect-square rounded-lg w-full"
              alt="Image "
            />
            <div className="flex flex-col">
              <div className="font-bold text-shade-black">
                Classic Comfort Chair
              </div>
              <div className="text-burnt-orange text-sm font-semibold">
                ₹4,499
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <Image
              src={"/Home/Image1.png"}
              height={0}
              width={0}
              sizes="100%"
              className="aspect-square rounded-lg w-full"
              alt="Image "
            />
            <div className="flex flex-col">
              <div className="font-bold text-shade-black">
                Classic Comfort Chair
              </div>
              <div className="text-burnt-orange text-sm font-semibold">
                ₹4,499
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <Image
              src={"/Home/Image1.png"}
              height={0}
              width={0}
              sizes="100%"
              className="aspect-square rounded-lg w-full"
              alt="Image "
            />
            <div className="flex flex-col">
              <div className="font-bold text-shade-black">
                Classic Comfort Chair
              </div>
              <div className="text-burnt-orange text-sm font-semibold">
                ₹4,499
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="p-4 md:p-20">
        <div className="relative shadow">
          <Image
            height={0}
            width={0}
            sizes="100%"
            className="w-full h-[70vh] object-cover object-center rounded-xl"
            src={"/Home/ImageLower.png"}
            alt="Lower Image"
          />
          <div className="absolute top-2 md:bottom-16 max-w-[500px] w-[calc(100%-1rem)] shadow-lg left-2 md:left-16 rounded-xl p-6 flex flex-col gap-4 bg-shade-black text-white">
            <div className="font-bold text-lg">About Furni</div>
            <div className="text-sm">
              We believe that furniture should be more than just functional; it
              should also be beautiful and inspiring. That&apos;s why we
              carefully curate our collection to ensure that every piece is a
              work of art in its own right.
            </div>
            <div className="rounded-full font-semibold w-fit text-sm bg-cream text-shade-black py-1 px-2 cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
