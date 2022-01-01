import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline'

// Import contexts
import { useAuthContext } from '../../contexts/AuthContext'

export default function NavbarUserDropdown() {
	const storedAuth = JSON.parse(localStorage.getItem('auth'));
	const authContext = useAuthContext();

	return (
		<Menu as="div" className="relative inline-block text-xs text-left -my-1">
			<div>
				<Menu.Button className="group inline-flex justify-center items-center focus:outline-none">
					<div class="inline-flex flex-col items-end">
						<span className="text-gray-500">
							Logged in as
						</span>
						<span className="font-bold text-gray-900">
							{storedAuth.name}
						</span>
					</div>
					<DotsVerticalIcon
						className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-900"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition as={Fragment}>
				<Menu.Items className="absolute z-20 right-0 w-56 mt-2 origin-top-right bg-white rounded shadow-md focus:outline-none">
					<div className="py-2">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${active ? 'bg-gray-50 text-gray-900' : 'text-gray-500'
										} group flex items-center w-full px-4 py-2`}
								>
									Edit Profile
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${active ? 'bg-gray-50 text-gray-900' : 'text-gray-500'} group flex items-center w-full px-4 py-2`}
									onClick={authContext.removeAuth}
								>
									Log Out
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};