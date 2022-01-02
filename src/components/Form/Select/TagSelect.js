import { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react'
import { XIcon, ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames';

// Import components
import Tag from '../../Tag';
import { Button, Input, Label } from '..';

const TagSelect = ({ selectedTags, setSelectedTags, placeholder, form = false, multiple = false }) => {
	const initForm = {
		id: 0,
		title: '',
		color: '#000000',
	};
	const [tags, setTags] = useState([]);
	// const [selectedTags, setSelectedTags] = useState([]);
	const [_form, setForm] = useState(initForm);

	const isSelectedTag = (tag) => selectedTags.some((selectedTag) => selectedTag.id === tag.id);

	const handleListBoxChange = (value) => {
		// if (multiple) {
		if (isSelectedTag(value)) {
			let _selectedTags = selectedTags;

			_selectedTags.splice(_selectedTags.indexOf(value), 1);
			setSelectedTags(_selectedTags)
		} else {
			setSelectedTags([...selectedTags, value]);
		}
		// } else {
		// 	setSelectedTags([value]);
		// }
	};

	const handleFormChange = (e) => setForm({
		..._form,
		[e.target.name]: e.target.value,
	});

	const handleFormSubmit = (e) => {
		setTags([...tags, _form]);
		setForm(initForm);
	};

	useEffect(() => {
		axios.get('/tags')
			.then((res) => setTags(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Listbox value={selectedTags} onChange={handleListBoxChange}>
			{({ open }) => (
				<>
					<div className="mt-1 relative">
						<Listbox.Button className="group relative text-sm text-left w-full h-[42px] p-2 border-b-2 border-gray-200 hover:border-gray-900 focus:outline-none cursor-pointer">
							{selectedTags.length ? selectedTags.map((selectedTag) => (
								<span className="mx-1" key={selectedTag.id}>
									<Tag {...tags.find((tag) => tag.id === selectedTag.id)} />
								</span>
							)) : (
								<span className="text-gray-400">
									{placeholder}
								</span>
							)}
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<ChevronDownIcon
									className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
						>
							<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-md max-h-96 rounded py-2 text-base overflow-auto focus:outline-none sm:text-sm">
								{form && (
									<form className="flex items-end px-4 pb-4 -mx-2" onSubmit={handleFormSubmit}>
										<div className="w-8/12 px-2">
											<Label>
												Title
											</Label>
											<Input name="title" value={_form.title} onChange={handleFormChange} />
										</div>
										<div className="w-2/12 px-2">
											<Label>
												Color
											</Label>
											<Input type="color" name="color" placeholder="Pick Color" value={_form.color} onChange={handleFormChange} />
										</div>
										<div className="w-2/12 px-2">
											<Button.Primary onClick={handleFormSubmit}>
												Add Tag
											</Button.Primary>
										</div>
									</form>
								)}

								{tags.map((tag) => (
									<Listbox.Option
										key={tag.id}
										className={classNames('cursor-pointer select-none relative hover:bg-gray-50 py-2 pl-4 pr-16', {
											'bg-gray-50': isSelectedTag(tag),
										})}
										value={tag}
									>
										<div className="inline-flex items-center">
											<Tag {...tag} />
										</div>

										{isSelectedTag(tag) ? (
											<span
												className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-900"
											>
												<XIcon className="h-4 w-4" aria-hidden="true" />
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
	);
};

export default TagSelect;