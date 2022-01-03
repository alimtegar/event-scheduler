import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Label, Input, Button, Select, DatePicker } from '../components/Form';
import { DocumentTextIcon } from '@heroicons/react/outline';
import { useQuery, useMutation } from 'react-query';
import swal from 'sweetalert';

// Import components
import Navbar from '../components/Navbar';
import Card from '../components/Card';

// Import API callers
import { getEvent, updateEvent, deleteEvent } from '../api';

const Event = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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

    useQuery(['event', id], () => getEvent(id), {
        onSuccess: (event) => {
            setForm({
                title: event.title,
                description: event.description,
                startTime: new Date(event.startTime),
                endTime: new Date(event.endTime),
                tags: event.tags,
            });
        },
        onError: () => {
            swal("error", "error", "error");
        },
    });
    const updateMutation = useMutation(() => updateEvent(id, form), {
        onSuccess: () => {
            swal("Success", "Changes in event schedule saved successfully.", "success");
        },
        onError: (err) => {
            swal("Error", err.message, "error");
        },
    });
    const deleteMutation = useMutation(() => deleteEvent(id), {
        onSuccess: () => {
            swal("Success", "Event schedule deleted successfully.", "success")
                .then(() => navigate('/'));
        },
        onError: (err) => {
            swal("Error", err.message, "error");
        },
    });

    return (
        <>
            <Navbar />

            <section className="p-6">
                <Card
                    icon={(<DocumentTextIcon className="w-8 h-8" />)}
                    title="Event Schedule Details"
                    description="See more or update schedule information."
                >
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
                                    <DatePicker dateFormat="dd-MM-yyyy" selected={form.startTime} onChange={(date) => setForm({ ...form, startTime: date })} />
                                </div>
                                <div className="w-6/12 px-1">
                                    <Label>
                                        To
                                    </Label>
                                    <DatePicker dateFormat="dd-MM-yyyy" selected={form.endTime} onChange={(date) => setForm({ ...form, endTime: date })} />
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
                            <div className="px-1">
                                <Button.Outline color="red" width="auto" onClick={() => swal({
                                    title: "Are You Sure?",
                                    text: "Are you sure want to delete the event schedule?",
                                    icon: "warning",
                                    buttons: ["Cancel", "Yes, Delete"],
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                        if (willDelete) {
                                            deleteMutation.mutate();
                                        }
                                    })
                                }>
                                    Delete
                                </Button.Outline>
                            </div>
                            <span className="px-1">
                                <Button.Primary width="auto" onClick={() => swal({
                                    title: "Are You Sure?",
                                    text: "are you sure you want to save the schedule changes?",
                                    icon: "warning",
                                    buttons: ["Cancel", "Yes, Save Changes"],
                                })
                                    .then((willDelete) => {
                                        // Check empty column
                                        const { tags, startTime, endTime, ..._form } = form;

                                        if (Object.values(_form).every((x) => x === '' || x === null)) {
                                            swal('Invalid Input', 'Columns cannot be empty.', 'error');

                                            return
                                        }

                                        if (willDelete) { updateMutation.mutate(); }
                                    })
                                }>
                                    Save Changes
                                </Button.Primary>
                            </span>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
};

export default Event;