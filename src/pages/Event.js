import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Label, Input, Button, Select, DatePicker } from '../components/Form';
import { DocumentTextIcon } from '@heroicons/react/outline';
import axios from 'axios';
import swal from 'sweetalert';

import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Event = () => {
    const initForm = {
        title: '',
        description: '',
        startTime: new Date(),
        endTime: new Date(),
        tags: [],
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const handleSubmit = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/events/${id}`, form, { headers: { Authorization: process.env.REACT_APP_DUMMY_USER_TOKEN } })
            .then((res) => swal("Success!", "success", "success"))
            .catch((err) => console.error(err));
    }

    const deleteEvent = () => {
        swal({
            title: "Are You Sure?",
            text: "Nulla facilisi. Nunc sem odio.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/events/${id}`, { headers: { Authorization: process.env.REACT_APP_DUMMY_USER_TOKEN } })
                        .then(() => swal("k", "success")
                            .then(() => navigate('/')))
                        .catch((err) => console.error(err));
                } else {
                    swal("k");
                }
            });
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/events/${id}`, { headers: { Authorization: process.env.REACT_APP_DUMMY_USER_TOKEN } })
            .then((res) => {
                console.log(res.data)
                setForm({
                    title: res.data.title,
                    description: res.data.description,
                    startTime: new Date(res.data.startTime),
                    endTime: new Date(res.data.endTime),
                    tags: res.data.tags,
                })
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div>
            <Navbar />

            <section className="p-6">
                <Card icon={(<DocumentTextIcon className="w-8 h-8" />)} title="Event Schedule Details" description="Aenean sollicitudin erat leo.">
                    <form className="-my-2">
                        <div className="py-2">
                            <Label>
                                Title
                            </Label>
                            <Input name="title" value={form.title} onChange={handleChange} />
                        </div>
                        <div className="py-2">
                            <Label>
                                Description
                            </Label>
                            <Input name="description" value={form.description} onChange={handleChange} />
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
                        <div className="flex justify-end pt-6 pb-2 -mx-1">
                            <div className="px-1">
                                <Button.Outline color="red" width="auto" onClick={deleteEvent}>
                                    Delete
                                </Button.Outline>
                            </div>
                            <span className="px-1">
                                <Button.Primary width="auto" onClick={handleSubmit}>
                                    Save Changes
                                </Button.Primary>
                            </span>
                        </div>
                    </form>
                </Card>
            </section>
        </div>
    );
};

export default Event;