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
    const { data: events, refetch, isFetched } = useQuery(['events', searchParams], () => getEvents(searchParams));

    useEffect(() => {
        refetch()
    }, [refetch, searchParams])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {isFetched && (
                events.length ? (
                    <section className="p-6">
                        <div className="-my-1">
                            {events.map((event) => (
                                <div className="py-1" key={event.id}>
                                    <Event {...event} />
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <section className="flex flex-grow flex-col justify-center items-center w-full">
                        <img src={require('../assets/images/empty.svg').default} className="w-64 mb-8" alt="Authentication" />
                        <h2 className="text-gray-900 font-extrabold">No Data</h2>
                        <p className="text-gray-500 text-xs" >Et odio pellentesque diam volutpat.</p>
                    </section>
                )
            )}

            <Link to="/events/create" className="fixed right-0 bottom-0 m-6">
                <Button.Primary height="lg" circle>
                    <PlusIcon className="w-8 h-8" />
                </Button.Primary>
            </Link>
        </div>
    );
};

export default Events;