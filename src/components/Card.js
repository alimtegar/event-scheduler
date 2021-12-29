import Frame from '../components/Frame';

const Card = ({ children, icon, title, description }) => (
    <div className="bg-white py-6 rounded shadow">
        <div className="py-4 px-6 mb-8 border-l-[4px] border-gray-900">
            <div className="flex items-center">
                <Frame size={16}>
                    {icon}
                </Frame>
                <div>
                    <h2 className="font-extrabold">{title}</h2>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>
            </div>
        </div>
        <div className="px-8">
            {children}
        </div>
    </div>
);

export default Card;