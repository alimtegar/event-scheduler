import classNames from 'classnames';

const Input = ({ type = 'text', placeholder, width = 'full', height = '[42px]', ...props }) => (
    <input
        type={type}
        {...placeholder && { placeholder: placeholder }}
        className={classNames('bg-white text-gray-900 text-sm p-2 border-b-2 border-gray-200 hover:border-gray-900 focus:border-gray-900 focus:outline-none', {
            [`w-${width}`]: width,
            [`h-${height}`]: height,
        })}
        {...props}
    />
);

export default Input;