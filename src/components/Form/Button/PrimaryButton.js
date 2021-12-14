import classNames from 'classnames';

const PrimaryButton = ({ children, type = "button", width = 'full', height = '[42px]', center = false, ...props }) => (
    <button
        type={type}
        className={classNames('inline-flex items-center justify-center font-extrabold bg-gray-900 hover:bg-gray-700 text-white hover:text-white text-sm rounded-full shadow-lg', {
            [`w-${width}`]: width,
            [`h-${height}`]: height,
            'pt-[7px] pb-[8px] px-6': !center,
            // 'inline-flex items-center justify-center': center,
        })}
        {...props}
    >
        {children}
    </button >
);

export default PrimaryButton;