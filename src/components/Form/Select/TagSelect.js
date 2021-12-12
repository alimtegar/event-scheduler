import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import classNames from 'classnames';

import Tag from '../../Tag';

const tags = [
	{
		id: 1,
		title: 'Wade Cooper',
		color: 'red',
	},
	{
		id: 2,
		title: 'Arlene Mccoy',
		color: 'orange',
	},
	{
		id: 3,
		title: 'Devon Webb',
		color: 'green',
	},
	{
		id: 4,
		title: 'Tom Cook',
		color: 'blue',
	},
]

const TagSelect = () => {
	const [selectedTags, setSelectedTags] = useState([tags[3]]);

	const isSelectedTag = (tag) => selectedTags.some((selectedTag) => selectedTag === tag);
	const handleChange = (value) => {
		if (isSelectedTag(value)) {
			let _selectedTags = selectedTags;

			_selectedTags.splice(_selectedTags.indexOf(value), 1);
			setSelectedTags(_selectedTags)
		} else {
			setSelectedTags([...selectedTags, value])
		}
	}

	return (
		<Listbox value={selectedTags} onChange={handleChange}>
			{({ open }) => (
				<>
					<div className="mt-1 relative">
						<Listbox.Button className="relative w-full p-2 border-b-[3px] border-gray-200 hover:border-gray-900 text-left cursor-default focus:outline-none">
							<div className="-mx-1"></div>
							{selectedTags.map((selectedTag) => (
								<span className="mx-1" key={selectedTag.id}>
									<Tag {...selectedTag} />
								</span>
							))}
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
								{tags.map((tag) => (
									<Listbox.Option
										key={tag.id}
										className={classNames('cursor-pointer select-none relative py-2 pl-2 pr-9', {
											'text-white bg-gray-50': isSelectedTag(tag),
											'text-gray-900': !isSelectedTag(tag),
										})}
										value={tag}

									>
										<div className="inline-flex items-center bg-white rounded-full">
											<Tag {...tag} />
										</div>

										{isSelectedTag(tag) ? (
											<span
												className={classNames('absolute inset-y-0 right-0 flex items-center pr-4', {
													'text-white': !isSelectedTag(tag),
													'text-gray-900': isSelectedTag(tag),
												})}
											>
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										) : null}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	)
};

export default TagSelect;