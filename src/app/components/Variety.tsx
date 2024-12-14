import Image from 'next/image';
import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    category1: string;
    imageUrl: string;
}

interface Women {
    id: number;
    name: string;
    price: number;
    category: string;
    category1: string;
    imageUrl: string;
}
const products: Product[] = [
    {
        id: 1,
        name: "Nike Dri-FIT Techknit",
        price: 33995,
        category: "Running Top",
        category1: "Mens Short Sleeve",
        imageUrl: "/men.png",
    },
    {
        id: 2,
        name: "Nike Dri-FIT Challenger",
        price: 10995,
        category: "Mens 18cm(appox) 2-",
        category1: "Versatile Short",
        imageUrl: "/men2.png",
    },
];
const womens: Women[] = [
    {
        id: 1,
        name: "Nike Dri-FIT Run Division",
        price: 8995,
        category: "Women Long Sleeve",
        category1: "Running Top",
        imageUrl: "/lady.png",
    },
    {
        id: 2,
        name: "Nike Fast",
        price: 8995,
        category: "Women Mid-Rse 7/8 Running",
        category1: "Legging with pockets",
        imageUrl: "/lady2.png",
    },
]
const Variety = () => {
    return (
        <div className=" flex flex-col lg:flex-row md:flex-row mt-4 mb-11 sm:px-8 container max-auto max-w-7xl"> 
            {/* Men's Product Section */}
            <div className="flex-1"> {/* Flex 1 ensures this section takes up available space */}
                <div className="flex  md:flex-row  justify-between mt-4"> {/* Align items to the left */}
                    <h1 className="text-lg sm:text-2xl font-bold mb-6">Best Of Air Max</h1>
                    <div className="flex flex-row space-x-4">
                        <h1 className="sm:font-bold">Shop</h1>
                        <div className="flex flex-row space-x-2">
                            <MdArrowBackIosNew
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                            />
                            <MdOutlineArrowForwardIos
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="productList"
                    className={`flex flex-row justify-start items-center gap-4 mx-6 mb-11`}
                >
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-start max-w-xs">  {/* Align items to the top */}
                            {/* Product Image */}
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={421}
                                height={421}
                                className="object-cover"
                            />
                            {/* Product Details */}
                            <div className="flex flex-col justify-start mt-4 text-left"> {/* Text alignment to left */}
                                {/* Product Name and Price */}
                                <div className="flex flex-row justify-between text-xl  sm:font-semibold">
                                    <h1 className='text-lg sm:text-xl '>{product.name}</h1>
                                    <h1>{product.price.toLocaleString()}</h1>
                                </div>
                                {/* Product Category */}
                                <p className="text-gray-400">{product.category}</p>
                                <p className="text-gray-400">{product.category1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Women's Product Section */}
            <div className="flex-1 "> {/* Flex 1 ensures this section takes up available space */}
                <div className="flex flex-row justify-end mt-4"> {/* Align items to the left */}
                    <h1 className="text-2xl font-bold mb-6"></h1>
                    <div className="flex flex-row space-x-4">
                        <h1 className="font-bold">Shop</h1>
                        <div className="flex flex-row space-x-2">
                            <MdArrowBackIosNew
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                            />
                            <MdOutlineArrowForwardIos
                                size={24}
                                className="bg-secondary rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="productList"
                    className={`flex flex-row justify-start gap-4 mx-6 mt-7 mb-11`}
                >
                    {womens.map((women) => (
                        <div key={women.id} className="flex flex-col items-start max-w-xs">  {/* Align items to the top */}
                            {/* Product Image */}
                            <Image
                                src={women.imageUrl}
                                alt={women.name}
                                width={421}
                                height={421}
                                className="object-cover"
                            />
                            {/* Product Details */}
                            <div className="flex flex-col justify-start mt-4 text-left"> {/* Text alignment to left */}
                                {/* Product Name and Price */}
                                <div className="flex flex-row justify-between text-xl sm:font-bold">
                                    <h1  className='text-lg sm:text-xl '>{women.name}</h1>
                                    <h1>{women.price.toLocaleString()}</h1>
                                </div>
                                {/* Product Category */}
                                <p className="text-gray-400">{women.category}</p>
                                <p className="text-gray-400">{women.category1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


export default Variety
