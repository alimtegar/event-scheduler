import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import swal from 'sweetalert';

// Import components
import Layout from '../components/Layout';
import { Label, Input, Button } from '../components/Form';
import { UserAddIcon } from '@heroicons/react/outline';

// Import API callers
import { register } from '../api';

// Import contexts
import { useAuthContext } from '../contexts/AuthContext';

const Register = () => {
    const authContext = useAuthContext();

    const initForm = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const mutation = useMutation(() => register(form), {
        onSuccess: (data) => {
            authContext.setAuth(data);
        },
        onError: (error) => {
            swal('Error', error.message, 'error');
        },
    });

    return (
        <Layout.Auth
            icon={(<UserAddIcon className="w-8 h-8 ml-1" />)}
            title="Register"
            description="Create your account."
        >
            <form className="-my-2" onSubmit={(e) => {
                e.preventDefault();

                // Check empty column
                if(Object.values(form).every((x) => x === '' || x === null)) {
                    swal('Invalid Input', 'Columns cannot be empty.', 'error');

                    return
                }

                // Check password match
                if (form.password !== form.confirmPassword) {
                    swal('Invalid Input', 'Password does not match.', 'error');

                    return;
                }

                mutation.mutate();
            }}>
                <div className="py-2">
                    <Label>
                        Full Name
                    </Label>
                    <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                </div>
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
                    <div className="flex">
                        <div className="flex-grow px-1">
                            <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                        </div>
                        <div className="flex-grow px-1">
                            <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
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
                        <Button.Primary type="submit" width="auto">
                            Register
                        </Button.Primary>
                    </span>
                </div>
            </form>
        </Layout.Auth>
    );
};

export default Register;