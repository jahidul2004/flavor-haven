const MenuItemCard = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row bg-[#f1f1f1] p-8 md:p-4 rounded-r-full rounded-b-full items-center gap-4">
            <div className="w-[80px] h-[80px]">
                <img
                    className="border-2 border-[#bc8408] w-full h-full rounded-r-full rounded-b-full"
                    src={item.image}
                    alt=""
                />
            </div>
            <div>
                <h3 className="md:text-xl font-bold uppercase">
                    {item.name}----------
                </h3>
                <p className="text-sm font-semibold">{item.recipe}</p>
            </div>
            <div>
                <p className="font-bold text-[#bc8408]">{item.price}$</p>
            </div>
        </div>
    );
};

export default MenuItemCard;
