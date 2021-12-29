import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/outline';

import { Button } from '../components/Form';
import Navbar from '../components/Navbar';
import Event from '../components/Event';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/events`, { headers: { Authorization: process.env.REACT_APP_DUMMY_USER_TOKEN } })
            .then((res) => setEvents(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Navbar />

            <section className="p-6">
                <div className="-my-1">
                    {events && events.map((event) => (
                        <div className="py-1" key={event.id}>
                            <Event {...event} />
                        </div>
                    ))}
                </div>
            </section>

            <Link to="/events/create" className="fixed right-0 bottom-0 m-6">
                <Button.Primary height="lg" circle>
                    <PlusIcon className="w-8 h-8" />
                </Button.Primary>
            </Link>
        </div>
    );
};

export default Events;