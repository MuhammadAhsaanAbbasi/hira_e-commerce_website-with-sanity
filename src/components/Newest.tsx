import { client } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
  _id,
    name,
    price,
  "slug":slug.current,
    "categoryName":category->name,
    "imageUrl": image[0].asset->url
  
}`;
  const productData = await client.fetch(query);
  return productData;
}

const Newest = async () => {
  const receiveProductData: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>

          <Link
            href={"/all"}
            className="flex text-primary items-center gap-x-1"
          >
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="grid mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {receiveProductData.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full lg:h-full lg:w-full object-cover object-center"
                />
              </div>

              <div className="mt-4 flex justify-between">
                {/*product name */}
                <div>
                  <h3 className="text-sm  text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>

                  {/*product category */}

                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>

                {/*product price */}
                <p className="text-sm font-medium text-gray-900">Rs:{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
