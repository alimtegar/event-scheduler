import { Link } from 'react-router-dom';

// Import components
import Layout from '../components/Layout';
import { Label, Input, Button } from '../components/Form';
import { UserAddIcon } from '@heroicons/react/outline';

const Register = () => (
    <Layout.Auth
        icon={(<UserAddIcon className="w-8 h-8 ml-1" />)}
        title="Register"
        description="Ornare suspendisse sed nisi lacus."
    >
        <form className="-my-2">
        <div className="py-2">
                <Label>
                    Full Name
                </Label>
                <Input name="email" placeholder="Full Name" value="" onChange="" />
            </div>
            <div className="py-2">
                <Label>
                    Email
                </Label>
                <Input name="email" placeholder="Email" value="" onChange="" />
            </div>
            <div className="py-2">
                <Label>
                    Password
                </Label>
                <div className="flex">
                    <div className="flex-grow px-1">
                        <Input name="password" placeholder="Password" value="" onChange="" />
                    </div>
                    <div className="flex-grow px-1">
                        <Input name="password" placeholder="Confirm Password" value="" onChange="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center pt-6 -mx-1">
                <span className="px-1">
                    <Link to="/login">
                        <Button.Outline width="auto">
                            Login
                        </Button.Outline>
                    </Link>
                </span>
                <span className="px-1">
                    <Button.Primary width="auto" onClick="">
                        Register
                    </Button.Primary>
                </span>
            </div>
        </form>
    </Layout.Auth>
);

export default Register;