import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './signUpForm.scss'
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/action-creators/user-action-creators';


const SignUpForm = () => {


	const [nameText, setNameText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [passwordConfirmText, setPasswordConfirmText] = useState("");
	const dispatch = useDispatch()

	return (
		<form className="sign-up-form">
			<Input
				type="text"
				id="input-name"
				name="input-1"
				label="Name"
				placeholder="Your name"
				isRequired={true}
				error="Enter your name"
				isEnable={true}
				isEmpty={nameText === "" ? true : false}
				isValid={true}
				callback={(e: any) => setNameText(e.target.value)}
			/>

			<Input
				type="email"
				id="input-email"
				name="input-2"
				label="Email"
				placeholder="Your email"
				isRequired={true}
				error="Email is not valid"
				isEnable={true}
				isEmpty={emailText === "" ? true : false}
				isValid={true}
				callback={(e: any) => setEmailText(e.target.value)}
			/>

			<Input
				type="password"
				id="input-password"
				name="input-3"
				label="Password"
				placeholder="Your password"
				isRequired={true}
				error="Password must contain at least 8 characters"
				isEnable={true}
				isEmpty={passwordText === "" ? true : false}
				isValid={passwordText.length < 8 && passwordText !== "" ? false : true}
				callback={(e: any) => setPasswordText(e.target.value)}
			/>

			<Input
				type="password"
				id="input-password-confirm"
				name="input-3"
				label="Confirm Password"
				placeholder="Confirm password"
				error="Confirmation not valid"
				isRequired={true}
				isEnable={true}
				isEmpty={passwordConfirmText === "" ? true : false}
				isValid={
					(passwordText === passwordConfirmText &&
						passwordConfirmText !== "") ||
					passwordConfirmText === ""
						? true
						: false
				}
				callback={(e: any) => setPasswordConfirmText(e.target.value)}
			/>

			<Button
				callback={() => {
					dispatch(signUp({
						'username': `${nameText}`,
						'email': `${emailText}`,
						'password': `${passwordText}` 						
					}))
				}}
                content="Sign Up"
                className="btn-form" />
            
			<p className="sign-up-form-text">
				Already have an account?
				<Link to={"/sign-in"} style={{ textDecoration: "none" }}>
					<span className="form-text-link">Sign In</span>
				</Link>
			</p>
		</form>
	);
};

export default SignUpForm;