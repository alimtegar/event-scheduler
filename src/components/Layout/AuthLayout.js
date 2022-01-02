import Frame from '../Frame';

const AuthLayout = ({ icon, title, description, children }) => (
    <div className="flex">
        <section className="flex justify-center items-center bg-gray-100 h-screen w-1/2">
            <img src={require('../../assets/images/authentication.svg').default} className="w-[28rem]" alt="Authentication" />
        </section>
        <section className="flex flex-col justify-center bg-white w-1/2 px-16 shadow">
            <div className="flex items-center mb-8">
                <Frame size="md">
                    {icon}
                </Frame>
                <div>
                    <h2 className="font-extrabold">{title}</h2>
                    <p className="text-gray-500 text-xs">{description}</p>
                </div>
            </div>
            <div>
                { children }
            </div>
        </section>
    </div>
);

export default AuthLayout;