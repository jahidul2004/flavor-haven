import QuickMessage from "../../../components/quickMessage/QuickMessage";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";

const MenuCategory = ({ data, title, description, imagePath }) => {
    return (
        <div>
            <QuickMessage
                title={title}
                description={description}
                dark={true}
                imagePath={imagePath}
            ></QuickMessage>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-10 mx-5">
                {data?.map((item) => (
                    <MenuItemCard key={item._id} item={item}></MenuItemCard>
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;
