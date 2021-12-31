import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { Label, Input, Select, Button, DatePicker } from './Form';

const Filter = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const initForm = {
        q: '',
        startTime: null,
        endTime: null,
        tags: [],
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
            tagId: form.tags.length ? form.tags[0].id : null,
        }

        // Remove object and empty value item from params
        params = Object.fromEntries(Object.entries(params).filter(([_, v]) =>
            typeof v !== 'object' &&
            v !== undefined &&
            v !== null &&
            v !== ''
        ));

        // Stringified params
        params = new URLSearchParams(params).toString();

        navigate('/?' + params)
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams);

        setForm({
            ...initForm,
            ...params,
            startTime: params.startTime && new Date(params.startTime),
            endTime: params.endTime && new Date(params.endTime),
            tags: params.tagId ? [{ id: +params.tagId }] : [],
        })
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
                <Select.Tag
                    selectedTags={form.tags}
                    setSelectedTags={(selectedTags) => setForm({ ...form, tags: selectedTags.length ? [selectedTags[selectedTags.length - 1]] : [] })}
                    placeholder="Select a Tag"
                />
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