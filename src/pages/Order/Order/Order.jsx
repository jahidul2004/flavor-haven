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
        </div>
    );
};

export default Order;
