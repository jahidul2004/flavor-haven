
const SectionTitle = ({subTitle, title, dark}) => {
    return (
        <div className="text-center my-10 w-max mx-auto">
            <p className="text-xl font-semibold text-[#bc8408] pb-2 mb-2 border-b-2"><i>---{subTitle}---</i></p>
            <h1 className={`${dark ? "text-white" : ""}  text-2xl md:text-3xl uppercase font-bold pb-2 border-b-2`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;