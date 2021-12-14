import { format } from 'date-fns';
import { MenuAlt2Icon, ClockIcon } from '@heroicons/react/outline';

import Frame from './Frame';
import Tag from './Tag';

const Event = ({ title, description, startTime, endTime, tags }) => (
    <div className="flex items-center bg-white p-6 rounded border-l-[4px] border-gray-900 shadow">
        <div>
            <Frame size={20}>
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
                            <span className="mx-1">
                                <Tag {...tag} />
                            </span>
                        ))}
                    </span>
                )}
            </div>

            <div className="flex w-full">
                {description && (
                    <div className="mr-16">
                        <h2 className="flex items-center font-bold text-gray-900 text-xs mb-1.5">
                            <MenuAlt2Icon className="inline-flex w-4 h-4 mr-1.5" />
                            Description
                        </h2>
                        <p className="text-xs text-gray-500 w-96 h-6" style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>
                            {description}
                        </p>
                    </div>
                )}

                <div className="flex flex-col mr-16">
                    <h2 className="flex items-center font-bold text-gray-900 text-xs mb-1.5">
                        <ClockIcon className="inline-flex w-4 h-4 mr-1.5" />
                        Time
                    </h2>
                    <span className="text-gray-500 text-xs">
                        {format(new Date(startTime), 'dd MMMM yyyy hh:ii:ss')} - {format(new Date(endTime), 'dd MMMM yyyy hh:ii:ss')}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default Event;