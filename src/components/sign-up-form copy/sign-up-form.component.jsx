import { useState, useContext} from "react";

import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss'

import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const defaultformFields =
{
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const {setCurrentUser} = useContext(UserContext); 



    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("Password do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, Already exists.')
            }
            else {
                console.log('User creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h2>Don't have an account? </h2>
            <span>Sign Up with you email and password.</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
 
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

               
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>

            </form>
        </div>
    );
};

export default SignUpForm;