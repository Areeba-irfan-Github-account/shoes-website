
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

// Define the Product interface
interface Product {
    id: number;
    tag: string;
    name: string;
    price: number;
    category: string;
    color: string;
    imageUrl: string;
}

// Mock data for products
const products: Product[] = [
    {
        id: 1,
        tag: 'Just In',
        name: "Nike Air force 1 mid 07",
        price: 10795.0,
        category: "Women's Shoes",
        color: '1 colors',
        imageUrl: "/shoe1.png",
    },
    {
        id: 2,
        tag: 'Just In',
        name: "Nike Court Vision Low Next Nature",
        price: 4995.0,
        color: '1 Color',
        category: "Men's Shoes",
        imageUrl: "/shoe1.png",
    },
    {
        id: 3,
        tag: 'Just In',
        name: "Nike Air",
        price: 8995.0,
        color: '',
        category: "Training Shoes",
        imageUrl: "/shoe-3.png",
    },
    {
        id: 4,
        tag: 'Just In',
        name: "Nike Blazer Low Platform",
        price: 8995.0,
        color: '1 Colors',
        category: "Women Shoes",
        imageUrl: "/shoes-1.png",
    },
    {
        id: 5,
        tag: 'Just In',
        name: "Puma Flex Trainer",
        price: 8995.0,
        color: '1 colors',
        category: "Men's Shoes",
        imageUrl: "/shoes-2.png",
    },
    {
        id: 6,
        tag: 'Just In',
        name: "Nike Court Legacy Lift",
        price: 8995.0,
        color: '2 Colors',
        category: "Women Shoes",
        imageUrl: "/shoes-3.png",
    },
];

const ProductDetails = ({ params }: { params: { product: string } }) => {
    const product = products.find((p) => p.id === parseInt(params.product, 10));

    // Handle case where product is not found
    if (!product) {
        return <div className="text-center mt-10">Product not found</div>;
    }

    return (
        <div>
            <div className="bg-secondary flex flex-col md:flex-row items-center justify-between  md:px-8 text-black space-y-4 md:space-y-0">
                {/* Logo Section */}
                <div className=" md:w-20 md:h-16 flex items-center justify-center">
                    <Image
                        width={40}
                        height={100}
                        src="/logo.png"
                        alt="logo"
                        layout="fixed"
                    />
                </div>
            </div>
            <Navbar />
            <div className=" mt-11 mb-11 mr-11 ml-11">
                <div className="grid grid-cols-2 md:flex-row gap-8">
                    {/* Product Image */}
                    <div className='ml-32'>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="object-cover"
                        />
                    </div>

                    <div className='mr-32'>

                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        {/* Product Details */}
                        <div className="flex flex-col mr-11">
                            <div className='mt-3 mb-3'>
                                <p>
                                    Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
                                </p>
                            </div>
                            <p className="text-black text-2xl font-bold mb-3">
                                Price: ₹{product.price.toLocaleString()}
                            </p>
                            <div className='flex flex-row space-x-2'>

                                <button className='flex flex-row py-3 bg-black rounded-r-full rounded-l-full mt-3 px-20 text-white'>
                                    <AiOutlineShoppingCart size={24}/> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
