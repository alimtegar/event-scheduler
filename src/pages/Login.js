import { Link } from 'react-router-dom';

// Import components
import Layout from '../components/Layout';
import { Label, Input, Button } from '../components/Form';
import { LoginIcon } from '@heroicons/react/outline';

const Login = () => (
    <Layout.Auth
        icon={(<LoginIcon className="w-8 h-8 ml-1" />)}
        title="Login"
        description="Dis parturient montes nascetur ridiculus."
    >
        <form className="-my-2">
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
                <Input name="password" placeholder="Password" value="" onChange="" />
            </div>
            <div className="flex justify-between items-center pt-6 -mx-1">
                <span className="px-1">
                    <Link to="/register">
                        <Button.Outline width="auto">
                            Register
                        </Button.Outline>
                    </Link>
                </span>
                <span className="px-1">
                    <Button.Primary width="auto" onClick="">
                        Login
                    </Button.Primary>
                </span>
            </div>
        </form>
    </Layout.Auth>
);

export default Login;