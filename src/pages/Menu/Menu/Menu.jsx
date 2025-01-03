import { Helmet } from "react-helmet-async";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter((menuItem) => menuItem.category === "dessert");
    const pizzas = menu.filter((menuItem) => menuItem.category === "pizza");
    const salads = menu.filter((menuItem) => menuItem.category === "salad");
    const soups = menu.filter((menuItem) => menuItem.category === "soup");
    const offered = menu.filter((menuItem) => menuItem.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Flavor Haven | Menu</title>
            </Helmet>

            {/* Todays Offer */}
            <QuickMessage
                title={"Our Menu"}
                description={"Would You Like to try a dish?"}
                dark={true}
                imagePath={"./src/assets/home/chef-service.jpg"}
            ></QuickMessage>
            <MenuCategory data={offered}></MenuCategory>
            {/* Todays Offer */}

            {/* Todays Offer */}
            <QuickMessage
                title={"Our Menu"}
                description={"Would You Like to try a dish?"}
                dark={true}
                imagePath={"./src/assets/home/featured.jpg"}
            ></QuickMessage>
            <MenuCategory data={deserts}></MenuCategory>
            {/* Todays Offer */}
        </div>
    );
};

export default Menu;
