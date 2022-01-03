import { useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PlusIcon } from '@heroicons/react/outline';

// Import components
import { Button } from '../components/Form';
import Navbar from '../components/Navbar';
import Event from '../components/Event';

// Import API callers
import { getEvents } from '../api';
import { format } from 'date-fns/esm';

const Events = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { data: events, refetch, isFetched, isLoading } = useQuery(['events', searchParams], () => getEvents(searchParams));

    useEffect(() => {
        let params = Object.fromEntries(searchParams);

        if (params.startTime) {
            refetch()
        } else {
            params = new URLSearchParams({
                ...params,
                startTime: format(new Date(), 'yyyy-MM-dd'),
            }).toString();

            navigate('/?' + params)
        }
    }, [refetch, searchParams])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {isLoading && (
                <section className="flex flex-grow flex-col justify-center items-center w-full">
                    <img src={require('../assets/images/season-change.svg').default} className="w-80 mb-8" alt="Authentication" />
                    <h2 className="text-gray-900 font-extrabold">Loading Data..</h2>
                    <p className="text-gray-500 text-xs" >please wait, data is loading.</p>
                </section>
            )}

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
                        <img src={require('../assets/images/empty.svg').default} className="w-80 mb-8" alt="Authentication" />
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