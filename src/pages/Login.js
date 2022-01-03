import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import swal from 'sweetalert';

// Import components
import Layout from '../components/Layout';
import { Label, Input, Button } from '../components/Form';
import { LoginIcon } from '@heroicons/react/outline';

// Import API callers
import { login } from '../api';

// Import contexts
import { useAuthContext } from '../contexts/AuthContext';

const Login = () => {
    const authContext = useAuthContext();

    const initForm = {
        email: '',
        password: '',
    };
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const mutation = useMutation(() => login(form), {
        onSuccess: (data) => {
            authContext.setAuth(data);
        },
        onError: (error) => {
            swal('Error', error.message, 'error');
        },
    });

    return (
        <Layout.Auth
            icon={(<LoginIcon className="w-8 h-8 ml-1" />)}
            title="Login"
            description="Access your account."
        >
            <form className="-my-2" onSubmit={(e) => {
                e.preventDefault();

                // Check empty column
                if(Object.values(form).every((x) => x === '' || x === null)) {
                    swal('Invalid Input', 'Columns cannot be empty.', 'error');

                    return
                }

                mutation.mutate();
            }}>
                <div className="py-2">
                    <Label>
                        Email
                    </Label>
                    <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>
                <div className="py-2">
                    <Label>
                        Password
                    </Label>
                    <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
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
                        <Button.Primary type="submit" width="auto">
                            Log In
                        </Button.Primary>
                    </span>
                </div>
            </form>
        </Layout.Auth>
    );
};

export default Login;