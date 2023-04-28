/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img alt="" src="/p2.png" />
                <img alt="" src="/p3.png" />
                <img alt="" src="/p4.png" />
                <img alt="" src="/p5.png" />
                <img alt="" src="/p6.png" />
                <img alt="" src="/p7.png" />
            </Carousel>
        </div>
    );
};

export default ProductCarousel;
