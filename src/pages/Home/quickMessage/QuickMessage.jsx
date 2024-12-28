const QuickMessage = () => {
    return (
        <div className="my-10 bg-[url('./src/assets/home/chef-service.jpg')] bg-cover bg-center h-96 flex items-center justify-center">
            <div className="w-[90%] md:w-[60%] h-[80%] md:h-[60%] bg-white flex flex-col items-center justify-center p-4 text-center">
                <h1 className="uppercase text-2xl md:text-3xl font-bold mb-2">
                    Flavor Haven Boss
                </h1>
                <p>
                    "Welcome to Flavor Gaven, where every bite tells a story!
                    Our project aims to create a unique dining experience,
                    blending delightful flavors with a warm and inviting
                    ambiance."
                </p>
            </div>
        </div>
    );
};

export default QuickMessage;
