import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

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
        <div>
            <SectionTitle
                subTitle={"Check it out"}
                title={"From Our Menu"}
            ></SectionTitle>

            <div></div>
        </div>
    );
};

export default PopularMenu;
