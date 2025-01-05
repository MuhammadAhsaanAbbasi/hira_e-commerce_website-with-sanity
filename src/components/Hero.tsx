import { client, urlFor } from "@/lib/sanity";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const query = `*[_type == "heroImages"][0]`;

  const imageData = await client.fetch(query);

  return imageData;
}

const Hero = async () => {
  const receiveData = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 lg:px-6 lg:max-w-7xl sm:pb-6">
      <div className="mb-8 md:mb-16 flex flex-wrap justify-between ">
        <div className="mb-6 flex flex-col w-full justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg-pb-14 lg:pt-48">
          <h1 className="mb-4 text-4xl text-black font-bold sm:text-5xl md:mb-8 md:text6xl">
            Top Fashion for a top Customer!
          </h1>

          <p className="max-w-md leading-relaxed text-gray-600 xl:text-lg">
            We are a fashion company that specializes in creating high-quality
            clothing for you. Our mission is to provide our customers with the
            best products at the best prices.
          </p>
        </div>

        {/*Image div*/}
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(receiveData.image1).url()}
              alt="heroPhotos"
              width={500}
              height={500}
              priority
              className=" h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(receiveData.image2).url()}
              alt="heroPhotos"
              width={500}
              height={500}
              priority
              className=" h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      {/*buttons*/}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          {/*men button */}
          <Link href={"/Men"} className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-blue-400 active:bg-gray-200">
          Men
          </Link>
          {/*women button */}
          <Link href={"/Women"} className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-pink-400 active:bg-gray-200">
          Women
          </Link>
          <Link href={"/Teens"} className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-yellow-400 active:bg-gray-200">
          Teens
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
