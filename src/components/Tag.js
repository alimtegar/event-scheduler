const Tag = ({ title, color }) => (
    <span
        className="relative inline-flex items-center bg-opacity-10 text-sm -mt-0.5 pb-[6px] pt-1 px-4 rounded-full"
        style={{
            color: color,
        }}
    >
        <div
            className="absolute inset-0 opacity-10 w-full h-full rounded-full"
            style={{
                backgroundColor: color,
            }}
        >

        </div>
        {/* <div className="relative z-10 w-[10px] h-[10px] mr-2 -mb-0.5 rounded-full"
                                                            style={{
                                                                backgroundColor: color,
                                                            }}
                                                        /> */}
        <span className="relative z-10">
            {title}
        </span>
    </span>
);

export default Tag;