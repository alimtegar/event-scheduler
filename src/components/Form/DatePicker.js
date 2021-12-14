import ReactDatePicker from "react-datepicker";
import classNames from "classnames";


const DatePicker = ({ width = 'full', height = '[42px]', ...props }) => (
    <div className={classNames('inline-flex', {
        [`w-${width}`]: width,
    })}>
        <ReactDatePicker
            className={classNames('w-full text-gray-900 text-sm p-2 border-b-[2px] border-gray-200 hover:border-gray-900 focus:outline-none', {
                [`h-${height}`]: height,
            })}
            {...props}
        />
    </div>
);

export default DatePicker;