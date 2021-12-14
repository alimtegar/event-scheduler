import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/outline';

import { Button } from '../components/Form';
import Navbar from '../components/Navbar';
import Event from '../components/Event';

const Events = () => {
    const events = [
        {
            id: 0,
            title: 'I Want to Sleep',
            description: 'Ut sodales ante quis justo molestie, vitae pharetra velit fermentum. Pellentesque sit amet enim elit.',
            startTime: '2021-12-01 08:00:00',
            endTime: '2021-12-30 08:00:00',
            tags: [
                { 
                    id: 0,
                    title: 'Sleep',
                    color: 'purple',
                }
            ],
        },
        {
            id: 0,
            title: 'Sleep 24H',
            description: 'Ut sodales ante quis justo molestie, vitae pharetra velit fermentum. Pellentesque sit amet enim elit.',
            startTime: '2021-12-01 08:00:00',
            endTime: '2021-12-30 08:00:00',
            tags: [
                { 
                    id: 0,
                    title: 'Sleep',
                    color: 'purple',
                }
            ],
        },
    ];

    return (
        <div>
            <Navbar />

            <section className="p-6">
                <div className="-my-2">
                    {events && events.map((event) => (
                        <div className="py-2" key={event.id}>
                            <Event {...event} />
                        </div>
                    ))}
                </div>
            </section>

            <Link to="/events/create" className="absolute right-0 bottom-0 m-6">
                <Button.Primary width={16} height={16} center>
                    <PlusIcon className="w-8 h-8" />
                </Button.Primary>
            </Link>
        </div>
    );
};

export default Events;