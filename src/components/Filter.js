import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { Label, Input, Button, DatePicker } from './Form';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const initForm = {
        q: '',
        startTime: null,
        endTime: null,
    }
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format startTime and endTime
        let params = {
            ...form,
            startTime: form.startTime && format(new Date(form.startTime), 'yyyy-MM-dd'),
            endTime: form.endTime && format(new Date(form.endTime), 'yyyy-MM-dd'),
        }

        // Remove null valued item from params
        params = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));

        // Stringified params
        params = new URLSearchParams(params).toString();

        navigate('/?' + params)
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams);

        setForm((_form) => ({
            ..._form,
            ...params,
            startTime: params.startTime && new Date(params.startTime),
            endTime: params.endTime && new Date(params.endTime),
        }))
    }, [searchParams])

    return (
        <form className="flex items-end flex-auto mt-4 -mx-1" onSubmit={handleSubmit}>
            <div className="inline-flex flex-col px-1 w-5/12">
                <Input name="q" placeholder="Search event schedule by title" value={form.q} onChange={handleChange} />
            </div>
            <div className="inline-flex flex-col px-1 w-2/12">
                <Label marginBottom={2}>
                    From
                </Label>
                <DatePicker
                    placeholderText="Select a date"
                    dateFormat="yyyy-MM-dd"
                    isClearable
                    selected={form.startTime}
                    onChange={(date) => setForm({ ...form, startTime: date })}
                />
            </div>
            <div className="inline-flex flex-col px-1 w-2/12">
                <Label marginBottom={2}>
                    To
                </Label>
                <DatePicker
                    placeholderText="Select a date"
                    dateFormat="yyyy-MM-dd"
                    isClearable
                    selected={form.endTime}
                    onChange={(date) => setForm({ ...form, endTime: date })}
                />
            </div>
            <div className="inline-flex flex-col px-1 w-2/12">
                <Label marginBottom={2}>
                    Tag
                </Label>
                <select name="" id="" className="appearance-none w-full h-[42px] text-gray-900 text-sm p-2 border-b-[2px] border-gray-200 hover:border-gray-900 focus:outline-none">
                    <option value="">Select a Tag</option>
                </select>
            </div>
            <div className="px-1 w-1/12">
                <Button.Outline type="submit">
                    Search
                </Button.Outline>
            </div>
        </form>
    )
};

export default Filter;