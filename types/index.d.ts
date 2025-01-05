interface simplifiedProduct {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
}

interface fullProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
}
