import React, { useState } from "react";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
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
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
            {/* Tabs end */}
        </div>
    );
};

export default Order;
