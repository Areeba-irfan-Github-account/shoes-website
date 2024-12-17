'use client';
import Image from 'next/image';
import React, { useState } from 'react';
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
            name: "Puma Trainer",
            price: 8995,
            category: "Training Shoes",
            imageUrl: "/shoes-2.png",
        },
        {
            id: 3,
            name: "Puma Trainer",
            price: 8995,
            category: "Training Shoes",
            imageUrl: "/shoe-3.png",
        },
        {
            id: 4,
            name: "Nike Air Pulse",
            price: 13995,
            category: "Women's Shoes",
            imageUrl: "/shoes-3.png",
        },
        {
            id: 5,
            name: "Nike Air Max",
            price: 14995,
            category: "Running Shoes",
            imageUrl: "/shoes.png",
        },
        {
            id: 6,
            name: "Nike Air Max",
            price: 14995,
            category: "Running Shoes",
            imageUrl: "/shoes-1.png",
        },
    ];

    const handleScrollLeft = () => {
        const slider = document.getElementById('productList');
        if (slider) {
            slider.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        const slider = document.getElementById('productList');
        if (slider) {
            slider.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="px-8">
                <div className="flex flex-row justify-between mt-4">
                    <h1 className="text-2xl font-bold mb-6">Best Of Air Max</h1>
                    <div className="flex flex-row space-x-4">
                        <h1 className="font-bold">Shop</h1>
                        <div className="flex flex-row space-x-2">
                            <MdArrowBackIosNew
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                                onClick={handleScrollLeft}
                            />
                            <MdOutlineArrowForwardIos
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                                onClick={handleScrollRight}
                            />
                        </div>
                    </div>
                </div>

                {/* Product List Section */}
                <div
                    id="productList"
                    className={`flex flex-row justify-start items-center overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 mb-11 no-scrollbar ${
                        !isProductListVisible ? 'hidden' : ''
                    }`}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-none w-60 h-auto p-4 bg-white rounded-lg shadow-lg snap-start"
                        >
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="object-cover rounded-md"
                            />
                            <div className="flex flex-col justify-start mt-4 text-center">
                                <div className="flex flex-row justify-between text-xl font-bold">
                                    <h1>{product.name}</h1>
                                    <h1>{product.price.toLocaleString()}</h1>
                                </div>
                                <p className="text-gray-400">{product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Feature />
            <Variety />
            <Miss />
            <Essential />
        </div>
    );
};

export default Category;
