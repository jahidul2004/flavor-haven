import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import QuickMessage from "./quickMessage/QuickMessage";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Banner end */}

            <div className="w-[95%] container mx-auto">
                {/* Category */}
                <Category></Category>
                {/* Category end */}

                {/* Quick Message */}
                <QuickMessage></QuickMessage>
                {/* Quick Message end */}
            </div>
        </div>
    );
};

export default Home;
