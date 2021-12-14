import Navbar from '../components/Navbar';
import { Label, Input, Button, Select } from '../components/Form';
import Frame from '../components/Frame';
import { PlusIcon } from '@heroicons/react/outline';

const CreateEvent = () => (
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
                            <h2 className="font-extrabold">Create Event</h2>
                            <p className="text-xs text-gray-500">Create an event and start manage them.</p>
                        </div>
                    </div>
                </div>
                <form action="" className="px-8 -my-2">
                    <div className="py-2">
                        <Label>
                            Title
                        </Label>
                        <Input />
                    </div>
                    <div className="py-2">
                        <Label>
                            Description
                        </Label>
                        <Input />
                    </div>
                    <div className="py-2">
                        <Label>
                            Time
                        </Label>
                        <div className="flex flex-wrap -mx-1">
                            <div className="w-6/12 px-1">
                                <Input placeholder="Start Time" />
                            </div>
                            <div className="w-6/12 px-1">
                                <Input placeholder="End Time" />
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <Label>
                            Tag
                        </Label>
                        <Select.Tag />
                    </div>
                    <div className="text-right pt-6 pb-2 -mx-1">
                        <span className="px-1">
                            <Button.Outline width="auto">
                                Reset
                            </Button.Outline>
                        </span>
                        <span className="px-1">
                            <Button.Primary width="auto">
                                Submit
                            </Button.Primary>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    </div>
);

export default CreateEvent;