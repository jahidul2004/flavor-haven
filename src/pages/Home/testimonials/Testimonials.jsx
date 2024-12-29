import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("../../../../public/reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="my-10">
            <SectionTitle
                subTitle={"What Our Client Say"}
                title={"Testimonials"}
            ></SectionTitle>

            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide>
                            <div className="bg-[#202938] text-white p-10 text-center flex justify-center items-center relative">
                                <div className="w-full md:w-1/2">
                                    <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#bc8408]">
                                        {review.name}
                                    </h1>
                                    <p className="font-semibold italic">
                                        {review.details}
                                    </p>
                                    <div className="mt-4">
                                        <StarRatings
                                            rating={review.rating}
                                            numberOfStars={5}
                                            name="rating"
                                            starRatedColor="#bc8408"
                                            starDimension="20px"
                                        />
                                    </div>
                                </div>
                                <div className="absolute right-4 bottom-4 flex text-[#bc8408]">
                                    <SiComma />
                                    <SiComma />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
