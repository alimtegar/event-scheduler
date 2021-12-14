import { useState } from 'react';
import { Label, Input, Button, Select, DatePicker } from '../components/Form';
import { PlusIcon } from '@heroicons/react/outline';
import axios from 'axios';
import swal from 'sweetalert';

import Navbar from '../components/Navbar';
import Frame from '../components/Frame';


const CreateEvent = () => {
    const API_URL = 'http://localhost:8080/api';
    const USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM5NTEyMjg0LCJleHAiOjE2Mzk1OTg2ODR9.VkDgPsorP8eoHSY94mxIz7Cd8D8D4PDYdJTuu_dhhcI';
    const initForm = {
        title: '',
        description: '',
        startTime: new Date(),
        endTime: new Date(),
        tags: [],
    };
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const handleSubmit = () => {
        axios.post(`${API_URL}/events`, form, { headers: { Authorization: `Bearer ${USER_TOKEN}` } })
            .then((res) => {
                setForm(initForm);
                swal("Good job!", "You clicked the button!", "success");
            })
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <Navbar />

            <section className="p-6">
                <div className="bg-white py-6 rounded shadow">
                    <div className="py-4 px-6 mb-8 border-l-[4px] border-gray-900">
                        <div className="flex items-center">
                            <Frame size={16}>
                                <PlusIcon className="w-8 h-8" />
                            </Frame>
                            <div>
                                <h2 className="font-extrabold">Add Event</h2>
                                <p className="text-xs text-gray-500">Add an event and start manage them.</p>
                            </div>
                        </div>
                    </div>
                    <form action="" className="px-8 -my-2">
                        <div className="py-2">
                            <Label>
                                Title
                            </Label>
                            <Input name="title" onChange={handleChange} />
                        </div>
                        <div className="py-2">
                            <Label>
                                Description
                            </Label>
                            <Input name="description" onChange={handleChange} />
                        </div>
                        <div className="py-2">
                            <div className="flex flex-wrap -mx-1">
                                <div className="w-6/12 px-1">
                                    <Label>
                                        Start Time
                                    </Label>
                                    <DatePicker selected={form.startTime} onChange={(date) => setForm({ ...form, startTime: date })} />
                                </div>
                                <div className="w-6/12 px-1">
                                    <Label>
                                        End Time
                                    </Label>
                                    <DatePicker selected={form.endTime} onChange={(date) => setForm({ ...form, endTime: date })} />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <Label>
                                Tag
                            </Label>
                            <Select.Tag selectedTags={form.tags} setSelectedTags={(selectedTags) => setForm({ ...form, tags: selectedTags })} />
                        </div>
                        <div className="text-right pt-6 pb-2 -mx-1">
                            <span className="px-1">
                                <Button.Outline width="auto">
                                    Reset
                                </Button.Outline>
                            </span>
                            <span className="px-1">
                                <Button.Primary width="auto" onClick={handleSubmit}>
                                    Submit
                                </Button.Primary>
                            </span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CreateEvent;