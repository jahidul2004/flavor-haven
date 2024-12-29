import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    useEffect(() => {
        fetch("/public/menu.json")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data.filter((item) => item.category === "popular"));
            });
    }, []);
    return (
        <div className="my-10">
            <SectionTitle
                subTitle={"Check it out"}
                title={"From Our Menu"}
            ></SectionTitle>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {menu.map((item) => (
                    <MenuItemCard key={item._id} item={item}></MenuItemCard>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Link
                    className="btn rounded-none border-2 border-[#bc8408] text-[#bc8408]"
                    to={"/"}
                >
                    VIEW ALL MENU
                </Link>
            </div>
        </div>
    );
};

export default PopularMenu;
