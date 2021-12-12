import classNames from 'classnames';

const Button = ({ children, width = 'full', height = 10, center = false }) => (
    <button className={classNames('font-bold bg-gray-900 hover:bg-gray-700 text-white hover:text-white text-sm border-[3px] border-gray-900 rounded-full shadow-lg', {
        [`w-${width}`]: width,
        [`h-${height}`]: height,
        'pt-[7px] pb-[8px] px-6': !center,
        'inline-flex items-center justify-center': center,
    })}>
        {children}
    </button>
);

export default Button;