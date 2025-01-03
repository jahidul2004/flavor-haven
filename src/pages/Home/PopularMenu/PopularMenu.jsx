import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter((item) => item.category === "popular");
    return (
        <div className="my-10">
            <MenuCategory
                title={"Popular Menu"}
                description={"Would You Like to try a dish?"}
                data={popularMenu}
                imagePath={"./src/assets/home/chef-service.jpg"}
                isDark={true}
            ></MenuCategory>
        </div>
    );
};

export default PopularMenu;
