
const SectionTitle = ({title,titleNo}) => {
    return (
        <h2 className="text-2xl py-10 text-[#CCD6F6] font-semibold hidden md:inline-flex items-center">
                <span className="text-lime-600">{titleNo}</span>
                 {title}
                <span className="md:w-60 lg:w-72 h-[.5px] bg-slate-400 ml-6"></span>
        </h2>
    );
};

export default SectionTitle;