import classNames from "classnames";

const Label = ({ children, marginBottom }) => (
    <label className={classNames('text-gray-500 text-xs mb-2', {
        [`mb-${marginBottom}`]: marginBottom,
    })}>
        {children}
    </label>
);

export default Label;