import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import image from "../../../assets/home/featured.jpg";

const FromOurMenu = () => {
    return (
        <div className="relative bg-[url('./src/assets/home/featured.jpg')] bg-cover bg-center w-full p-2 pb-12 my-10">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10">
                <SectionTitle
                    subTitle={"Check It Out"}
                    title={"From Our Menu"}
                    dark={true}
                ></SectionTitle>

                <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                        <img className="w-full md:w-1/2" src={image} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                        <h1 className="text-2xl font-bold">
                            March 20, 2023 WHERE CAN I GET SOME?
                        </h1>
                        <p className="my-4 font-semibold">
                            Flavor Gaven restaurant project is designed to
                            showcase a curated selection of the best dishes from
                            the restaurant's menu. This section gives customers
                            a sneak peek at the restaurant's specialties,
                            enticing them with visually appealing images and
                            captivating descriptions.
                        </p>
                        <button className="btn bg-transparent rounded-none border-2 border-[#bc8408] text-[#bc8408]">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;
// dcbkjlh
