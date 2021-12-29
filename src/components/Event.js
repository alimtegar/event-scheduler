import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { MenuAlt2Icon, CalendarIcon,LocationMarkerIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';

import Frame from './Frame';
import Tag from './Tag';
import { Button } from './Form';

const Event = ({ id, title, description, startTime, endTime, tags }) => (
    <div className="flex items-center bg-white p-4 rounded border-l-[4px] border-gray-900 shadow">
        <div>
            <Frame size="lg">
                <span className="font-extrabold text-2xl">{format(new Date(endTime), 'dd')}</span>
                <span className="font-bold text-sm -mt-1">{format(new Date(endTime), 'MMMM').substring(0, 3).toUpperCase()}</span>
            </Frame>
        </div>

        <div className="flex-auto">
            <div className="flex items-center mb-2">
                <h2 className="inline-flex font-extrabold text-gray-900">
                    {title}
                </h2>

                {tags && (
                    <span className="ml-2 -mx-1">
                        {tags.map((tag) => (
                            <span className="mx-1" key={tag.id}>
                                <Tag {...tag} />
                            </span>
                        ))}
                    </span>
                )}
            </div>

            <div className="flex w-full">
                {description && (
                    <div className="flex flex-row mr-8">
                        {/* <h2 className="flex items-center font-bold text-gray-900 text-xs mb-1.5"> */}
                        <MenuAlt2Icon className="inline-flex text-gray-900 font-bold w-3.5 h-3.5 mt-[1px] mr-2" />
                        {/* Description */}
                        {/* </h2> */}
                        <p className="text-xs text-gray-500 w-96 h-8">
                            {description}
                        </p>
                    </div>
                )}

                <div className="flex flex-row mr-8">
                    {/* <h2 className="flex items-center font-bold text-gray-900 text-xs mb-1.5"> */}
                    <CalendarIcon className="inline-flex text-gray-900 font-bold w-3.5 h-3.5 mt-[1px] mr-2" />
                    {/* Time */}
                    {/* </h2> */}
                    <span className="text-gray-500 text-xs">
                        {format(new Date(startTime), 'dd MMMM yyyy')} - {format(new Date(endTime), 'dd MMMM yyyy')}
                    </span>
                </div>

            </div>
        </div>

        <div className="pr-4">
            <Link to={`events/${id}`}>
                <Button.Outline circle>
                    <ChevronRightIcon className="w-5 h-5" />
                </Button.Outline>
            </Link>
        </div>
    </div>
);

export default Event;