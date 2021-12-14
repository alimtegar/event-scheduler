import classNames from 'classnames';

const OutlineButton = ({ children, width = 'full', height = '[42px]', center = false }) => (
    <button className={classNames('inline-flex items-center justify-center font-bold bg-white hover:bg-gray-900 text-gray-900 hover:text-white text-sm border-2 border-gray-900 rounded-full', {
        [`w-${width}`]: width,
        [`h-${height}`]: height,
        'pt-[7px] pb-[8px] px-6': !center,
        // 'inline-flex items-center justify-center': center,
    })}>
        {children}
    </button>
);

export default OutlineButton;