import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Starter from '../components/Starter';
import Footer from '../components/Footer';
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



interface Product {
    id: number;
    tag: string;
    name: string;
    price: number;
    category: string;
    color: string;
    imageUrl: string;
}


const page = () => {

    const products: Product[] = [
        {
            id: 1,
            tag: 'Just In',
            name: "Nike Air force 1 mid 07 ",
            price: 10795.00,
            category: "Women's Shoes",
            color: '1 colors',
            imageUrl: "/shoe1.png",
        },
        {
            id: 2,
            tag: 'Just In',
            name: "Nike court vision low next nature",
            price: 4995.00,
            color: '1 Color',
            category: "Men's Shoes",
            imageUrl: "/sh.png",
        },
        {
            id: 3,
            tag: 'Just In',
            name: "Nike Air",
            price: 8995,
            color: '',
            category: "Training Shoes",
            imageUrl: "/shoe-3.png",
        },
        {
            id: 4,
            tag: 'Just In ',
            name: "Nike Court Legacy Lift",
            price: 8995,
            color: '2 Colors',
            category: "Women Shoes",
            imageUrl: "/shoes-3.png",
        },
        {
            id: 5,
            tag: 'Just In',
            name: "Puma Flex Trainer",
            price: 8995,
            color: '1 colors',
            category: "Mens Shoes",
            imageUrl: "/shoes-2.png",
        },
    ];

    return (
        <div>
            <Starter />
            <Navbar />
            <div className='mt-11 mb-11 px-8'>
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-bold'>New(500)</div>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex flex-row mb-3'>
                            <div>Hide Filters</div>
                            <IoFilter size={20} />
                        </div>

                        <div className='flex flex-row'>
                            <div>SortBy</div>
                            <IoIosArrowDown size={24} />
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 ">
                    {/* Sidebar */}
                    <div className="w-64 h-screen bg-white hidden lg:block text-black overflow-y-auto border-r border-gray-200 p-4">
                        <div className="space-y-4">
                            {/* Categories */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                                <ul className="space-y-2">
                                    <li>Shoes</li>
                                    <li>Sport Bras</li>
                                    <li>Tops</li>
                                    <li>Hoodies</li>
                                    <li>Jackets</li>
                                    <li>Trousers</li>
                                    <li>Shorts</li>
                                    <li>Skirts</li>
                                    <li>Socks</li>
                                </ul>
                            </div>

                            <hr className="border-gray-300" />

                            {/* Gender Section */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Gender</h2>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Male</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Women</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Unisex</span>
                                    </label>
                                </div>
                            </div>

                            {/* Kids Section */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Kids</h2>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Boys</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Girls</span>
                                    </label>
                                </div>
                            </div>

                            <hr className="border-gray-300" />

                            {/* Shop by Price */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Shop by Price</h2>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Under 2500.00</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>2501.00 -</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Products Section */}
                    <div className="col-span-3">
                        <div className="flex flex-wrap justify-center gap-1 mb-11">
                            {products.map((product) => (
                                <div key={product.id} className="flex flex-col items-center ">
                                    {/* Product Image */}
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={348}
                                        height={348}
                                        className="object-cover"
                                    />
                                    {/* Product Details */}
                                    <div className="flex flex-col justify-start mt-4 items-start">
                                        {/* Product Name and Price */}
                                        <div className="flex flex-col justify-start items-start text-xl">
                                            <h1 className='text-red-600 text-semi-bold'>{product.tag}</h1>
                                            <Link href={`/products/${product.id}`} className="hover:underline text-xl text-black">{product.name}
                                            </Link>

                                            <h1 className='text-gray-400'>{product.category}</h1>
                                            <h1 className='text-gray-400'>{product.color}</h1>
                                            <h1>MRP:{product.price.toLocaleString()}</h1>
                                        </div>
                                        {/* Product Category */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page