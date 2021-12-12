import classNames from 'classnames';

const Button = ({ children, width = 'full' }) => (
    <button className={classNames('font-bold bg-white hover:bg-gray-900 text-gray-900 hover:text-white text-sm pt-[7px] pb-[8px] px-6 border-[3px] border-gray-900 rounded-full', {
        [`w-${width}`]: width,
    })}>
        {children}
    </button>
);

export default Button;