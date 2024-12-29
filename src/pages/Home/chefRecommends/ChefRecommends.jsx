import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import RecommendedItemCard from "../../shared/recommendedItem/RecommendedItemCard";

const ChefRecommends = () => {
    const [recommendedItems, setRecommendedItems] = useState([]);
    console.log(recommendedItems);
    useEffect(() => {
        fetch("/public/menu.json")
            .then((res) => res.json())
            .then((data) => {
                setRecommendedItems(
                    data.filter((item) => item.category === "offered")
                );
            });
    }, []);
    return (
        <div className="my-10">
            <SectionTitle
                title={"Chef Recommends"}
                subTitle={"Should Try"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    recommendedItems.map((item) => <RecommendedItemCard key={item.id} item={item}></RecommendedItemCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;
