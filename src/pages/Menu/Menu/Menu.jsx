import { Helmet } from "react-helmet-async";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [todaysOffer, setTodaysOffer] = useState([]);

    useEffect(() => {
        setTodaysOffer(menus.filter((item) => item.category === "popular"));
    }, []);

    useEffect(() => {
        axios.get("/public/menu.json").then((response) => {
            setMenus(response.data);
        });
    }, []);
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
            <div className="mx-4 my-10">
                <SectionTitle
                    subTitle={"Don't Miss"}
                    title={"Todays Offer"}
                ></SectionTitle>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {todaysOffer.map((offer) => (
                        <MenuItemCard
                            key={offer._id}
                            item={offer}
                        ></MenuItemCard>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-6">
                    <button className="btn rounded-none border-2 border-[#bc8408] text-[#bc8408]">
                        Order Your Favorite Food
                    </button>
                </div>
            </div>
            {/* Todays offer end */}
        </div>
    );
};

export default Menu;
