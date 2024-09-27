const SectionTitle = ({content}) => {
    return (
        <div className="grid grid-cols-1">
            <div className="text-start text-lg font-bold mb-2">{content}</div>
        </div>
    );
}

export default SectionTitle;