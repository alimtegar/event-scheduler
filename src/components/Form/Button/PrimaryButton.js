import classNames from 'classnames';

const PrimaryButton = ({
    children,
    type = 'button',
    width = 'full',
    height = 'md',
    circle = false,
    ...props
}) => {
    const heights = {
        md: 'h-[42px]',
        lg: 'h-16',
    };
    const widths = {
        full: 'w-full',
        auto: 'w-auto',
    }

    const initCn = 'inline-flex items-center justify-center font-bold bg-gray-900 hover:bg-gray-700 text-white hover:text-white text-sm rounded-full shadow-lg';
    const heightCn = heights[height];
    const widthCn = circle ? '' : widths[width];
    const circleCn = circle ? 'aspect-square' : 'pt-[7px] pb-[8px] px-6';

    return (
        <button
            type={type}
            className={`${initCn} ${heightCn} ${widthCn} ${circleCn}`}
            {...props}
        >
            {children}
        </button >
    );
};

export default PrimaryButton;