import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../chefRecommends/ChefRecommends";
import CallUs from "../contact/CallUs";
import FromOurMenu from "../fromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import QuickMessage from "../../../components/quickMessage/QuickMessage";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            {/* Helmet */}
            <Helmet>
                <title>Flavor Haven | Home</title>
            </Helmet>
            {/* Helmet end */}

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

                {/* Chef recommends */}
                <ChefRecommends></ChefRecommends>
                {/* Chef recommends end */}

                {/* From Our Menu */}
                <FromOurMenu></FromOurMenu>
                {/* From Our Menu end */}

                {/* Testimonials */}
                <Testimonials></Testimonials>
                {/* Testimonials end */}
            </div>
        </div>
    );
};

export default Home;
