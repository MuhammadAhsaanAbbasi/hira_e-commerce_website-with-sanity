export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Product',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Product',
      type: 'array',
      of: [{type: 'image'}], //?When there are multiple images, they will be an array of images, and the type of the array must also be defined.
    },

    {
      name: 'description',
      title: 'Description of Product',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name', //? This specifies the field ('name') from which the slug will be generated.
      },
    },

    {
      name: 'price',
      title: 'Price of Product',
      type: 'number',
    },

    {
      name: 'category',
      title: 'Category of Product',
      type: 'reference', //? This defines that the field is a reference to another document.
      to: [{type: 'category'}], //? The 'to' property specifies the target document type(s) this field can reference.
      //? In this case, it allows referencing documents of the type 'category'.
    },
  ],
}
