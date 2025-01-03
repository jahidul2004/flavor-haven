import MenuItemCard from "../../shared/menuItem/MenuItemCard";

const MenuCategory = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-10 mx-5">
            {data?.map((item) => (
                <MenuItemCard key={item._id} item={item}></MenuItemCard>
            ))}
        </div>
    );
};

export default MenuCategory;
