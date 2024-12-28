import Banner from "./Banner/Banner";
import Category from "./Category/Category";

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
            </div>
        </div>
    );
};

export default Home;
