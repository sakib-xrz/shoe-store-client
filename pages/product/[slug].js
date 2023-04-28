import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCarousel from "@/components/ProductCarousel";

import { IoMdHeartEmpty } from "react-icons/io";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductCarousel />
                    </div>

                    {/* right column  */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            PRODUCT TITLE
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            PRODUCT SUBTITLE
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : $20
                            </p>
                            <p className="text-base  font-medium line-through">
                                $25
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                20% off
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size{" "}
                                    <span className="text-red-500">*</span>
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 7.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 8
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 8.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 9
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 9.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 10
                                </div>
                            </div>

                            {/* SHOW ERROR START */}
                            <div className="text-red-600 font-medium mt-2">
                                Size selection is required
                            </div>

                            {/* ADD TO CART BUTTON START */}
                            <button className="w-full mt-5 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add to Cart
                            </button>

                            {/* WISHLIST BUTTON START */}
                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                                Wishlist
                                <IoMdHeartEmpty size={20} />
                            </button>

                            <div>
                                <div className="text-lg font-bold mb-5">
                                    Product Details
                                </div>
                                <div className="markdown text-md mb-5">
                                    <ReactMarkdown>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Cumque nobis obcaecati
                                        iusto consequuntur cum in dignissimos
                                        officia incidunt, ab, necessitatibus
                                        corporis voluptate fugit tenetur ipsam
                                        quae distinctio, delectus et vero.
                                        Voluptates odio explicabo maxime esse
                                        facere. Ab deleniti excepturi nostrum
                                        esse optio harum unde vitae, ducimus
                                        debitis laudantium, atque qui.
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;
