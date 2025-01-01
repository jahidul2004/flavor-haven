import { Helmet } from "react-helmet-async";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import { useEffect, useState } from "react";
import axios from "axios";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor Haven | Menu</title>
            </Helmet>

            {/* Banner */}
            <QuickMessage
                title={"Our Menu"}
                description={"Would You Like to try a dish?"}
                dark={true}
                imagePath={"./src/assets/home/chef-service.jpg"}
            ></QuickMessage>
            {/* Banner end */}

            {/* Todays offer */}
            <PopularMenu></PopularMenu>
            {/* Todays offer end */}
        </div>
    );
};

export default Menu;
