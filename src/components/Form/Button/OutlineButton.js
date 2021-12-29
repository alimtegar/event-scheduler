import classNames from 'classnames';

// hover:bg-red-500 text-red-500 border-red-500

const OutlineButton = ({ children, type = "button", color = 'gray-900', width = 'full', height = '[42px]', center = false, ...props }) => (
    <button
        type={type}
        className={classNames('inline-flex items-center justify-center font-bold bg-white hover:text-white text-sm border-2 rounded-full', {
            [`w-${width}`]: width,
            [`h-${height}`]: height,
            'pt-[7px] pb-[8px] px-6': !center,
            // 'inline-flex items-center justify-center': center,
            [`hover:bg-${color} text-${color} border-${color}`]: color,
        })}
        {...props}
    >
        {children}
    </button>
);

export default OutlineButton;