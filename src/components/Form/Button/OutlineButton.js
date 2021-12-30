const OutlineButton = ({
    children,
    type = 'button',
    color = 'black',
    height = 'md',
    width = 'full',
    circle = false,
    ...props
}) => {
    const colors = {
        black: 'hover:bg-gray-900 text-gray-900 border-gray-900',
        red: 'hover:bg-red-500 text-red-500 border-red-500',
    };
    const heights = {
        md: 'h-[42px]',
        lg: 'h-16',
    };
    const widths = {
        full: 'w-full',
        auto: 'w-auto',
    }

    const initCn = 'inline-flex items-center justify-center font-bold bg-white hover:text-white text-sm border-2 rounded-full';
    const colorCn = colors[color];
    const heightCn = heights[height];
    const widthCn = circle ? '' : widths[width];
    const circleCn = circle ? 'aspect-square' : 'pt-[7px] pb-[8px] px-6';

    return (
        <button
            type={type}
            className={`${initCn} ${colorCn} ${heightCn} ${widthCn} ${circleCn}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default OutlineButton;