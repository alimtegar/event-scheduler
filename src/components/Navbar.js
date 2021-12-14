import { useState } from "react";
import { Link } from 'react-router-dom';

import { Label, Input, Button, DatePicker } from './Form';

const Navbar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="bg-white p-6 shadow">
            <nav className="flex justify-between items-center text-gray-900 w-full">
                <Link to="/">
                    <h1 className="font-extrabold">
                        Event Scheduler
                    </h1>
                </Link>

                <div className="flex items-center -my-2">
                    <div className="inline-flex bg-gray-200 w-8 h-8 rounded-full mr-4"></div>
                    <div className="flex flex-col -mt-0.5">
                        <span className="text-gray-500 text-xs">Logged in as </span>
                        <span className="font-bold text-xs">Alim Tegar Wicaksono</span>
                    </div>

                </div>
            </nav>

            <form action="" className="flex items-end flex-auto mt-4 -mx-1">
                <div className="inline-flex flex-col px-1 w-5/12">
                    <Input placeholder="Search event here..." />

                </div>
                <div className="inline-flex flex-col px-1 w-2/12">
                    <Label marginBottom={2}>
                        Filter by
                    </Label>
                    <select name="" id="" className="appearance-none w-full h-[42px] text-gray-900 text-sm p-2 border-b-[2px] border-gray-200 hover:border-gray-900 focus:outline-none">
                        <option value="">Date</option>
                        <option value="">Date Range</option>
                    </select>
                </div>
                <div className="inline-flex flex-col px-1 w-2/12">
                    <Label marginBottom={2}>
                        Date
                    </Label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="inline-flex flex-col px-1 w-2/12">
                    <Label marginBottom={2}>
                        Tag
                    </Label>
                    <select name="" id="" className="appearance-none w-full h-[42px] text-gray-900 text-sm p-2 border-b-[2px] border-gray-200 hover:border-gray-900 focus:outline-none">
                        <option value="">Select Tag</option>
                    </select>
                </div>
                <div className="px-1 w-1/12">
                    <Button.Outline>
                        Submit
                    </Button.Outline>
                </div>
            </form>
            {/* <form action="" className="inline-flex -mx-2">
                    <div className="mx-2">
                        <input type="text" placeholder="Ketikkan judul acara disini..." className="w-72 text-gray-900 text-sm pt-[6px] p-2 border-b-[2px] border-gray-200 hover:border-gray-900 focus:outline-none" />
                    </div>
                    <div className="mx-2">
                        <button className="font-bold hover:bg-gray-900 text-gray-900 hover:text-white text-sm py-[7px] px-6 border-[3px] border-gray-900 rounded-full">
                            Cari
                        </button>
                    </div>
                </form> */}
        </div>
    );
};

export default Navbar;