import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../Input/Input";
import "./signInForm.scss";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/action-creators/user-action-creators";

const SignInForm = () => {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
 
	const dispatch = useDispatch();

	return (
		<form className="sign-in-form">
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
			<a className="form-text-link form-text-link--white" href="#">
				Forgot password?
			</a>

			<Button
				callback={() => {
					dispatch(
						signIn({
							email: `${emailText}`,
							password: `${passwordText}`,
						})
					);
				}}
				content="Sign In"
				className="btn-form"
			/>

			<p className="sign-in-form-text">
				Don’t have an account?
				<Link to={"/sign-up"} style={{ textDecoration: "none" }}>
					<span className="form-text-link">Sign Up</span>
				</Link>
			</p>
		</form>
	);
};

export default SignInForm;
