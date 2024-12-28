import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div className="my-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full" src={category1} alt="" />
                    <h1 className="-mt-9 md:-mt-16 text-center text-xl md:text-3xl text-white">
                        SALADS
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={category2} alt="" />
                    <h1 className="-mt-9 md:-mt-16 text-center text-xl md:text-3xl text-white">
                        PIZZAS
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={category3} alt="" />
                    <h1 className="-mt-9 md:-mt-16 text-center text-xl md:text-3xl text-white">
                        SOUPS
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={category4} alt="" />
                    <h1 className="-mt-9 md:-mt-16 text-center text-xl md:text-3xl text-white">
                        DESERT
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={category5} alt="" />
                    <h1 className="text-center text-xl md:text-3xl text-white">
                        SALADS
                    </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
