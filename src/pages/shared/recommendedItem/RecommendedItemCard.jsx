const RecommendedItemCard = ({ item }) => {
    const { name, recipe, image, imgHeight } = item;
    return (
        <div className="bg-[#f1f1f1]">
            <div>
                <img style={{height:imgHeight || '200px'}} className={`w-full`} src={image} alt="" />
            </div>
            <div className="p-4">
                <div className="text-center my-3">
                    <h1 className="text-2xl font-bold mb-2">{name}</h1>
                    <p className="font-semibold text-sm">{recipe}</p>
                </div>
                <div className="flex justify-center">
                    <button className="btn rounded-none border-2 border-[#bc8408] text-[#bc8408]">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendedItemCard;
