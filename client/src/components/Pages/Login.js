import React, { useContext, useState, useEffect } from "react";
import Input from "../Common/FormElements/Input";
import Button from "../Common/Button/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../util/validator";
import { useForm } from "../hooks/formHook";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = (props) => {
	const auth = useContext(AuthContext);
	const [error, setError] = useState(null);
	const [formState, inputHandler] = useForm(
		{
			email: {
				value: "",
				isValid: false,
			},
			password: {
				value: "",
				isValid: false,
			},
		},
		{
			isValid: false,
		}
	);

	useEffect(() => {
		if (auth.loggedIn === true) {
			props.history.push("/all");
		}
	});

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const data = {
			email: formState.inputs.email.value,
			password: formState.inputs.password.value,
		};
		const config = {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
		};

		axios
			.post("/api/users/login", data, config)
			.then((foundUser) => {
				if (foundUser.data.success === false) {
					setError(true);
				}
				if (foundUser.data.foundUser) {
					auth.login(foundUser.data.foundUser);
					props.history.push("/all");
				} else {
					props.history.push("/login");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="padding-32 side-col white-bg mobile-full-height">
					<h1 className="margin-s text-center textWhite">Log in</h1>
					<form onSubmit={onSubmitHandler}>
						<Input id="email" type="email" label="Email" errorText="Please enter a valid email." validator={[VALIDATOR_EMAIL()]} onInput={inputHandler} inputStyle="hide-text-input-field" inputContainerStyle="margin-s input-field" labelStyle="input-field-label" errorStyle="error-border" />

						<Input id="password" type="password" label="Password" errorText="Password must be at least 6 characters." validator={[VALIDATOR_MINLENGTH(6)]} onInput={inputHandler} inputStyle="hide-text-input-field" inputContainerStyle="margin-s input-field" labelStyle="input-field-label" errorStyle="error-border" />

						<Button type="submit" btnStyle="Button margin-xs" disabledBtn={!formState.isValid}>
							Log in
						</Button>
					</form>
					<p className="margin-s link-text textWhite">
						Don't have an account yet? Register <Link to="/register">here!</Link>
					</p>
				</div>

				<div className="col blue-bg full-height padding-32 mobile-hide"></div>
			</div>
		</div>
	);
};

export default Login;
