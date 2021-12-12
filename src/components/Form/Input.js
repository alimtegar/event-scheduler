import classNames from 'classnames';

const Input = ({type = 'text', placeholder, width = 'full'}) => (
    <input
        type={type}
        {...placeholder && { placeholder: placeholder }}
        className={classNames('text-gray-900 text-sm pt-[6px] p-2 border-b-[3px] border-gray-200 hover:border-gray-900 focus:outline-none', {
            [`w-${width}`]: width,
        })} />
);

export default Input;