import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes("login");
    return (
        <div>
            {/* NavBar */}
            {!noHeaderFooter && <NavBar></NavBar>}
            {/* Navbar end */}
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            {!noHeaderFooter && <Footer></Footer>}
            {/* Footer end */}
        </div>
    );
};

export default Main;
