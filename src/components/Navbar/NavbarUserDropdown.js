import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import swal from 'sweetalert';

// Import contexts
import { useAuthContext } from '../../contexts/AuthContext'

export default function NavbarUserDropdown() {
	const storedAuth = JSON.parse(localStorage.getItem('auth'));
	const authContext = useAuthContext();

	return (
		<Menu as="div" className="relative inline-block text-xs text-left -my-1">
			<div className="inline-flex justify-center items-center">
				<div className="inline-flex flex-col items-end">
					<span className="text-gray-500">
						Logged in as
					</span>
					<span className="font-bold text-gray-900">
						{storedAuth.name}
					</span>
				</div>
				<Menu.Button className="group focus:outline-none">
					<DotsVerticalIcon
						className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-900"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition as={Fragment}>
				<Menu.Items className="absolute z-20 right-0 mt-1 origin-top-right bg-white w-48 rounded shadow-md focus:outline-none">
					<div className="py-2">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${active ? 'bg-gray-50' : ''} text-gray-900 flex items-center w-full pl-4 pr-16 py-2`}
								>
									Edit Profile
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${active ? 'bg-gray-50' : ''} text-gray-900 flex items-center w-full pl-4 pr-16 py-2`}
									onClick={() => swal({
										title: "Are You Sure?",
										text: "Sagittis eu volutpat odio facilisis.",
										icon: "warning",
										buttons: ["Cancel", "Yes, Log Out"],
										dangerMode: true,
									})
										.then((willDelete) => {
											if (willDelete) { authContext.removeAuth(); }
										})
									}>
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