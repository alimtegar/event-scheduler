import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/outline';

import { Button } from '../components/Form';
import Navbar from '../components/Navbar';
import Event from '../components/Event';

const Events = () => {
    // const events = [
    //     {
    //         id: 0,
    //         title: 'I Want to Sleep',
    //         description: 'Ut sodales ante quis justo molestie, vitae pharetra velit fermentum. Pellentesque sit amet enim elit.',
    //         startTime: '2021-12-01 08:00:00',
    //         endTime: '2021-12-30 08:00:00',
    //         tags: [
    //             { 
    //                 id: 0,
    //                 title: 'Sleep',
    //                 color: 'purple',
    //             }
    //         ],
    //     },
    //     {
    //         id: 0,
    //         title: 'Sleep 24H',
    //         description: 'Ut sodales ante quis justo molestie, vitae pharetra velit fermentum. Pellentesque sit amet enim elit.',
    //         startTime: '2021-12-01 08:00:00',
    //         endTime: '2021-12-30 08:00:00',
    //         tags: [
    //             { 
    //                 id: 0,
    //                 title: 'Sleep',
    //                 color: 'purple',
    //             }
    //         ],
    //     },
    // ];
    const API_URL = 'http://localhost:8080/api';
    const USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM5NTEyMjg0LCJleHAiOjE2Mzk1OTg2ODR9.VkDgPsorP8eoHSY94mxIz7Cd8D8D4PDYdJTuu_dhhcI';
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/events`, { headers: { Authorization: `Bearer ${USER_TOKEN}` } })
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
                <Button.Primary width={16} height={16} center>
                    <PlusIcon className="w-8 h-8" />
                </Button.Primary>
            </Link>
        </div>
    );
};

export default Events;