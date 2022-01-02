import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label, Input, Button, Select, DatePicker } from '../components/Form';
import { PlusIcon } from '@heroicons/react/outline';
import { useMutation } from 'react-query';
import swal from 'sweetalert';

// Import components
import Navbar from '../components/Navbar';
import Card from '../components/Card';

// Import API callers
import { createEvent } from '../api';

const CreateEvent = () => {
    const initForm = {
        title: '',
        description: '',
        startTime: new Date(),
        endTime: new Date(),
        tags: [],
    };
    const navigate = useNavigate();
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const mutation = useMutation(() => createEvent(form), {
        onSuccess: () => {
            setForm(initForm);
            swal("Success", "Senectus et netus et malesuada.", "success")
                .then(() => navigate('/'));
        },
        onError: (err) => {
            swal("Error", err.message, "error")
                .then(() => navigate('/'));
        },
    })

    return (
        <>
            <Navbar />

            <section className="p-6">
                <Card icon={(<PlusIcon className="w-8 h-8" />)} title="Add Event Schedule" description="Vitae fringilla sapien dictum sit amet.">
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
                                        From
                                    </Label>
                                    <DatePicker selected={form.startTime} onChange={(date) => setForm({ ...form, startTime: date })} />
                                </div>
                                <div className="w-6/12 px-1">
                                    <Label>
                                        To
                                    </Label>
                                    <DatePicker selected={form.endTime} onChange={(date) => setForm({ ...form, endTime: date })} />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <Label>
                                Tag
                            </Label>
                            <Select.Tag
                                selectedTags={form.tags}
                                setSelectedTags={(selectedTags) => setForm({ ...form, tags: selectedTags })}
                                placeholder="Select Tags"
                                form
                            />
                        </div>
                        <div className="flex justify-between pt-6 pb-2 -mx-1">
                            <span className="px-1">
                            </span>
                            <span className="px-1">
                                <Button.Primary width="auto" onClick={mutation.mutate}>
                                    Add
                                </Button.Primary>
                            </span>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
};

export default CreateEvent;