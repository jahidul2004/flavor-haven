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
            <MenuCategory
                title={"Our Menu"}
                description={"Would You Like to try a dish?"}
                imagePath={"./src/assets/menu/banner3.jpg"}
                data={offered}
            ></MenuCategory>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 rounded-full border-[#bc8408] text-[#bc8408]">
                    Order Your Favorite Food
                </button>
            </div>
            {/* Todays Offer */}

            {/* Dessert */}
            <MenuCategory
                title={"Desserts"}
                description={"Would You Like to try a dish?"}
                imagePath={"./src/assets/menu/dessert-bg.jpeg"}
                data={deserts}
            ></MenuCategory>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 rounded-full border-[#bc8408] text-[#bc8408]">
                    Order Your Favorite Food
                </button>
            </div>
            {/* Dessert */}

            {/* Pizza */}
            <MenuCategory
                title={"pizza"}
                description={"Would You Like to try a dish?"}
                imagePath={"./src/assets/menu/pizza-bg.jpg"}
                data={pizzas}
            ></MenuCategory>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 rounded-full border-[#bc8408] text-[#bc8408]">
                    Order Your Favorite Food
                </button>
            </div>
            {/* Pizza */}

            {/* Salads */}
            <MenuCategory
                title={"Salads"}
                description={"Would You Like to try a dish?"}
                imagePath={"./src/assets/menu/salad-bg.jpg"}
                data={salads}
            ></MenuCategory>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 rounded-full border-[#bc8408] text-[#bc8408]">
                    Order Your Favorite Food
                </button>
            </div>
            {/* Salads */}

            {/* Soups */}
            <MenuCategory
                title={"Soups"}
                description={"Would You Like to try a dish?"}
                imagePath={"./src/assets/menu/soup-bg.jpg"}
                data={soups}
            ></MenuCategory>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 rounded-full border-[#bc8408] text-[#bc8408]">
                    Order Your Favorite Food
                </button>
            </div>
            {/* Soups */}
        </div>
    );
};

export default Menu;
