import classNames from 'classnames';

const TransparentButton = ({ children, type = 'button', color = 'gray-900', width = 'full', height = '[42px]', center = false, ...props }) => (
    <button
        type={type}
        className={classNames('group relative inline-flex items-center justify-center font-bold text-sm rounded-full', {
            [`w-${width}`]: width,
            [`h-${height}`]: height,
            'pt-[7px] pb-[8px] px-6': !center,
            // 'inline-flex items-center justify-center': center,
            [`text-${color}`]: color,
        })}
        {...props}
    >
        <span className="relative z-10">
            {children}
        </span>
        <div className={classNames('absolute inset-0 opacity-10 w-full h-full rounded-full', {
            [`group-hover:bg-${color}`]: color,
        })} />
    </button >
);

export default TransparentButton;