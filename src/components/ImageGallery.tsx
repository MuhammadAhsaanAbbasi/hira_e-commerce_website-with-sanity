import React from "react";
import Image from "next/image";
// import { urlFor } from "../lib/sanity";

interface iAppProps {
  image: string;
}
const ImageGallery = ({ image }: iAppProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="flex gap-4 order-last lg:order-none lg:flex-col">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={image}
            width={200}
            height={200}
            alt="photo"
            className="h-full w-full object-cover object-center cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
