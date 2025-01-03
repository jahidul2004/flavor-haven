import { Parallax } from "react-parallax";

const QuickMessage = ({ imagePath, title, description, dark }) => {
    return (
        <Parallax
            blur={2}
            bgImage={imagePath}
            bgImageAlt="the cat"
            strength={200}
        >
            <div
                className={`mb-10 bg-cover bg-center h-96 flex items-center justify-center`}
            >
                <div
                    className={`w-[90%] md:w-[60%] h-[80%] md:h-[60%] ${
                        dark
                            ? "bg-white text-black"
                            : "bg-[#0000007c] text-white"
                    } flex flex-col items-center justify-center p-4 text-center`}
                >
                    <h1 className="uppercase text-2xl md:text-3xl font-bold mb-2">
                        {title}
                    </h1>
                    <p>{description}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default QuickMessage;
