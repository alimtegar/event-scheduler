import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PlusIcon } from '@heroicons/react/outline';

// Import components
import { Button } from '../components/Form';
import Navbar from '../components/Navbar';
import Event from '../components/Event';

// Import API callers
import { getEvents } from '../api';

const Events = () => {
    const [searchParams] = useSearchParams();
    const { data: events, refetch, isLoading } = useQuery(['events', searchParams], () => getEvents(searchParams));

    useEffect(() => {
        refetch()
    }, [refetch, searchParams])

    return (
        <div>
            <Navbar />

            <section className="p-6">
                <div className="-my-1">
                    {isLoading && 'lagi loading'}

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