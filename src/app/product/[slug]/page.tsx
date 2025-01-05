import ImageGallery from '@/components/ImageGallery';
import { client } from '@/lib/sanity';
import React from 'react'

async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    "imageUrl": image[0].asset->url,
    price,
    description,
    "slug":slug.current,
    "categoryName":category->name,
}`;

const data = await client.fetch(query);
return data
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data:fullProduct = await getProduct(params.slug);
  console.log(data)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery image={data.imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage
