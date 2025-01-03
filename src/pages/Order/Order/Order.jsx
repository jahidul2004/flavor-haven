import React from "react";
import QuickMessage from "../../../components/quickMessage/QuickMessage";

const Order = () => {
    return (
        <div>
            {/* Quick Message */}
            <QuickMessage
                title="Our Shop"
                description="Would you like to try a dish?"
                imagePath={"./src/assets/shop/banner2.jpg"}
            ></QuickMessage>
            {/* Quick Message end */}

            {/* Tabs */}
            <div
                role="tablist"
                className="tabs tabs-boxed w-full md:w-1/2 mx-auto my-5 border border-[#bc8408] rounded-lg text-[#bc8408] font-semibold"
            >
                <a role="tab" className="tab">
                    SALAD
                </a>
                <a role="tab" className="tab tab-active">
                    PIZZA
                </a>
                <a role="tab" className="tab">
                    SOUPS
                </a>
                <a role="tab" className="tab">
                    DESSERTS
                </a>
                <a role="tab" className="tab">
                    DRINKS
                </a>
            </div>
            {/* Tabs end */}
        </div>
    );
};

export default Order;
