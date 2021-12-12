import classNames from "classnames";

const Frame = ({ children, size }) => (
    <div className={classNames('flex flex-col justify-center items-center bg-gray-900 text-white mr-6 rounded-xl shadow-lg', {
      [`w-${size} h-${size}`]: size,
    })}>
        {children}
    </div>
);

export default Frame;