import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" text-white">
            <div className="flex flex-col md:flex-row justify-evenly">
                <div className="bg-[#202938] w-full md:w-1/2 p-10 flex justify-center items-center">
                    <aside className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
                        <ul className="flex flex-col gap-2 font-semibold text-sm">
                            <li>129/60 Gulbagh, Malibagh, Dhaka-1212</li>
                            <li>+8801787275288</li>
                            <li>Mon - Fri 08:00 - 22:00</li>
                            <li>Sat - Sun 10:00 - 23:00</li>
                        </ul>
                    </aside>
                </div>

                <div className="bg-[#111828] w-full md:w-1/2 p-10 flex justify-center items-center">
                    <nav className="text-center flex flex-col items-center">
                        <h6 className="text-2xl font-bold text-white">
                            Follow Us On
                        </h6>
                        <p className="font-semibold">
                            Join us on social media.
                        </p>
                        <div className="flex gap-4 text-2xl mt-4">
                            <Link to={"/"}>
                                <FaFacebook />
                            </Link>
                            <Link to={"/"}>
                                <AiFillTwitterCircle />
                            </Link>
                            <Link to={"/"}>
                                <FaSquareInstagram />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <aside className="text-white bg-black p-4 text-center">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                    by Flavor Haven
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
