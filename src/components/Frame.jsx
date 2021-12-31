const Frame = ({ children, size }) => {
	const sizes = {
		md: 'w-16 h-16',
		lg: 'w-20 h-20',
	};

	let initCn = 'flex flex-col items-center justify-center items-center bg-gray-900 text-white mr-6 rounded-xl shadow-lg';
	let sizeCn = sizes[size];

	return (
		<div className={`${initCn} ${sizeCn}`}>
			{children}
		</div>
	)
};

export default Frame;