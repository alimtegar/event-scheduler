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
                    <span className="ml-4 -mx-1">
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

                {/* <div className="flex flex-col mr-16">
									<h2 className="flex items-center font-bold text-gray-900 text-sm mb-1">
										<svg className="inline-flex w-4 h-4 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
										Tempat
									</h2>
									<span className="text-gray-500 text-sm">
										Yogyakarta
									</span>
								</div> */}

                {/* {JSON.stringify(data)} */}
            </div>
        </div>
    </div>
);

export default Event;