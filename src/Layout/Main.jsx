import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default Main;
