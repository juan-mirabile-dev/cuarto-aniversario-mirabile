const TitleSection = ({content}) => {
    return (
        <div className="grid grid-cols-1">
            <div className="text-start md:text-lg text-base font-bold">{content}</div>
        </div>
    );
}

export default TitleSection;