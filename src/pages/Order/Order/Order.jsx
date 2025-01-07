import React, { useState } from "react";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";
import RecommendedItemCard from "../../shared/recommendedItem/RecommendedItemCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const deserts = menu.filter((menuItem) => menuItem.category === "dessert");
    const pizzas = menu.filter((menuItem) => menuItem.category === "pizza");
    const salads = menu.filter((menuItem) => menuItem.category === "salad");
    const soups = menu.filter((menuItem) => menuItem.category === "soup");
    const offered = menu.filter((menuItem) => menuItem.category === "offered");
    return (
        <div>
            {/* Quick Message */}
            <QuickMessage
                title="Our Shop"
                description="Would you like to try a dish?"
                imagePath={"./src/assets/shop/banner2.jpg"}
            ></QuickMessage>
            {/* Quick Message end */}

            {/* Tabs */}
            <div className="w-full md:w-1/2 mx-auto my-5">
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {salads.map((item) => (
                                <RecommendedItemCard
                                    key={item.id}
                                    item={{ ...item, imgHeight: "150px" }}
                                />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pizzas.map((item) => (
                                    <RecommendedItemCard
                                        key={item.id}
                                        item={{ ...item, imgHeight: "150px" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {soups.map((item) => (
                                    <RecommendedItemCard
                                        key={item.id}
                                        item={{ ...item, imgHeight: "150px" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {deserts.map((item) => (
                                    <RecommendedItemCard
                                        key={item.id}
                                        item={{ ...item, imgHeight: "150px" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {offered.map((item) => (
                                    <RecommendedItemCard
                                        key={item.id}
                                        item={{ ...item, imgHeight: "150px" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            {/* Tabs end */}
        </div>
    );
};

export default Order;
