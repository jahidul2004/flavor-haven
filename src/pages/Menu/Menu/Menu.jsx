import { Helmet } from "react-helmet-async";
import QuickMessage from "../../../components/quickMessage/QuickMessage";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor Haven | Menu</title>
            </Helmet>

            {/* Banner */}
            <QuickMessage
                title={"Our Menu"}
                description={"Would You Like to try a dish?"}
                dark={true}
                imagePath={"./src/assets/home/chef-service.jpg"}
            ></QuickMessage>
            {/* Banner end */}
        </div>
    );
};

export default Menu;
