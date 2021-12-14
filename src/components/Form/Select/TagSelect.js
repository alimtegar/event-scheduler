import { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react'
import { XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames';

import Tag from '../../Tag';
import { Button, Input, Label } from '..';

const TagSelect = ({ selectedTags, setSelectedTags }) => {
	const API_URL = 'http://localhost:8080/api';
	const USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM5NTEyMjg0LCJleHAiOjE2Mzk1OTg2ODR9.VkDgPsorP8eoHSY94mxIz7Cd8D8D4PDYdJTuu_dhhcI';
	const initForm = {
		id: 0,
		title: '',
		color: '#000000',
	};
	const [tags, setTags] = useState([]);
	// const [selectedTags, setSelectedTags] = useState([]);
	const [form, setForm] = useState(initForm);

	const isSelectedTag = (tag) => selectedTags.some((selectedTag) => selectedTag === tag);

	const handleListBoxChange = (value) => {
		if (isSelectedTag(value)) {
			let _selectedTags = selectedTags;

			_selectedTags.splice(_selectedTags.indexOf(value), 1);
			setSelectedTags(_selectedTags)
		} else {
			setSelectedTags([...selectedTags, value])
		}
	};

	const handleFormChange = (e) => setForm({
		...form,
		[e.target.name]: e.target.value,
	});

	const handleFormSubmit = (e) => {
		setTags([...tags, form]);
		setForm(initForm);
	};

	useEffect(() => {
		axios.get(`${API_URL}/tags`, { headers: { Authorization: `Bearer ${USER_TOKEN}` } })
			.then((res) => setTags(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Listbox value={selectedTags} onChange={handleListBoxChange}>
			{({ open }) => (
				<>
					<div className="mt-1 relative">
						<Listbox.Button className="relative w-full h-[42px] p-2 border-b-2 border-gray-200 hover:border-gray-900 text-sm text-left cursor-default focus:outline-none">
							{selectedTags.length ? selectedTags.map((selectedTag) => (
								<span className="mx-1" key={selectedTag.id}>
									<Tag {...selectedTag} />
								</span>
							)) : <span>Select Tag</span>}
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<ChevronDownIcon
									className="w-5 h-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded py-4 text-base overflow-auto focus:outline-none sm:text-sm">

								<form className="flex items-end px-4 pb-4 -mx-2" onSubmit={handleFormSubmit}>
									<div className="w-8/12 px-2">
										<Label>
											Title
										</Label>
										<Input name="title" value={form.title} onChange={handleFormChange} />
									</div>
									<div className="w-2/12 px-2">
										<Label>
											Color
										</Label>
										<Input type="color" name="color" placeholder="Pick Color" value={form.color} onChange={handleFormChange} />
									</div>
									<div className="w-2/12 px-2">
										<Button.Primary onClick={handleFormSubmit}>
											Add Tag
										</Button.Primary>
									</div>
								</form>

								{tags.map((tag) => (
									<Listbox.Option
										key={tag.id}
										className={classNames('cursor-pointer select-none relative hover:bg-gray-50 py-2 pl-4 pr-9', {
											'bg-gray-50': isSelectedTag(tag),
										})}
										value={tag}
									>
										<div className="inline-flex items-center">
											<Tag {...tag} />
										</div>

										{isSelectedTag(tag) ? (
											<span
												className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
											>
												<XIcon className="h-5 w-5" aria-hidden="true" />
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