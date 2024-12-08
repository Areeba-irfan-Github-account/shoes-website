'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Feature from './Feature';
import Variety from './Variety';
import Miss from './Miss';
import Essential from './Essential';


interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
}

const Category = () => {
    const [isProductListVisible, setIsProductListVisible] = useState(true);

    const products: Product[] = [
        {
            id: 1,
            name: "Nike Air Pulse",
            price: 13995,
            category: "Women's Shoes",
            imageUrl: "/shoe1.png",
        },
        {
            id: 2,
            name: "Adidas Ultraboost",
            price: 10995,
            category: "Men's Shoes",
            imageUrl: "/shoe1.png",
        },
        {
            id: 3,
            name: "Puma Flex Trainer",
            price: 8995,
            category: "Training Shoes",
            imageUrl: "/shoe-3.png",
        },
    ];

    const handleArrowClick = () => {
        setIsProductListVisible(!isProductListVisible);
        // Scroll effect
        if (isProductListVisible) {
            // Scroll the product list div down
            document.getElementById('productList')?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <div className='px-8'>
                <div className='flex flex-row justify-between mt-4'>
                    <h1 className=' text-2xl font-bold mb-6'>Best Of Air Max</h1>
                    <div className='flex flex-row space-x-4 '>
                        <h1 className='font-bold '>Shop</h1>

                        <div className="flex flex-row space-x-2">
                            <MdArrowBackIosNew
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                                onClick={handleArrowClick}
                            />
                            <MdOutlineArrowForwardIos
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                                onClick={handleArrowClick}
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="productList"
                    className={`flex flex-wrap justify-center gap-4 mx-6 mb-11 ${!isProductListVisible ? 'hidden' : ''}`}
                >
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center max-w-xs">
                            {/* Product Image */}
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={421}
                                height={421}
                                className="object-cover"
                            />
                            {/* Product Details */}
                            <div className="flex flex-col justify-start mt-4 text-center">
                                {/* Product Name and Price */}
                                <div className="flex flex-row justify-between text-xl font-bold">
                                    <h1>{product.name}</h1>
                                    <h1>{product.price.toLocaleString()}</h1>
                                </div>
                                {/* Product Category */}
                                <p className="text-gray-400">{product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Feature />
                <Variety/>
                <Miss/>
                <Essential/>
            </div>


        </div>

    )
}

export default Category