import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CallUs from "../contact/CallUs";
import PopularMenu from "../PopularMenu/PopularMenu";
import QuickMessage from "../quickMessage/QuickMessage";

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

                {/* Popular Menu */}
                <PopularMenu></PopularMenu>
                {/* Popular Menu end */}

                {/* Call Us */}
                <CallUs></CallUs>
                {/* Call Us end */}
            </div>
        </div>
    );
};

export default Home;
