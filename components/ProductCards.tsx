import Image from "next/image";
import React from "react";
import { ProductItem } from "@/data/Products";

interface Product {
  item: ProductItem;
}

export default function ProductCards({ item }: Product) {
  return (
    <div className="w-full flex flex-col gap-4 group cursor-pointer">
      <div
        className="aspect-[8/8] group-hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] after:block after:absolute after:-top-full hover:after:-top-1/2 hover:after:-right-1/2 after:w-full after:-right-full after:transition-all after:duration-[900ms] after:ease-out after:scale-[141.41%] after:h-full after:bg-black/40 after:rotate-45 before:block before:ease-out before:absolute before:top-full before:w-full before:transition-all before:duration-[900ms] before:-left-full hover:before:top-1/2 hover:before:-left-1/2 before:scale-[141.41%] before:h-full before:bg-black/40 before:rotate-45 w-full flex items-center justify-center rounded-[20px] overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${item?.src})` }}
      >
        {item?.actualPrice && (
          <div className="bg-cream text-shade-black rounded-full px-3 py-1 text-sm font-semibold absolute right-3 top-3">
            On Sale
          </div>
        )}
        {item?.available === false && (
          <div className="absolute top-1/2 z-[10] whitespace-nowrap text-sm font-semibold bg-burnt-orange py-1 -translate-y-1/2 text-cream">
            Out of Stock • Out of Stock • Out of Stock • Out of Stock • Out of
            Stock • Out of Stock • Out of Stock
          </div>
        )}
      </div>
      {/* <Image
        height={0}
        width={0}
        sizes="100%"
        alt="images"
        src={item?.src}
        className="aspect-[8/9] w-full rounded-[20px] shadow-lg object-cover object-center"
      /> */}
      <div
        className="flex gap-1 flex-col"
        style={{ opacity: item?.available === false ? 0.5 : 1 }}
      >
        <div className="font-bold text-shade-black">{item?.name}</div>
        <div className="flex gap-4">
          {item?.actualPrice && (
            <div className="text-shade-black/70 line-through text-sm font-semibold">
              {item?.actualPrice}
            </div>
          )}
          <div className="text-burnt-orange  text-sm font-semibold">
            {item?.price}
          </div>
        </div>
      </div>
    </div>
  );
}
