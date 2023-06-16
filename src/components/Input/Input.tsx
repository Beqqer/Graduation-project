import React from "react";
import "./input.scss";
import { IInput } from "../../Types";

const Input = ({
	type,
	id,
	name,
	label,
	value,
	placeholder,
	isEnable,
	isEmpty,
	isValid,
	isRequired,
    error,
    callback
}: IInput) => {
    const labelComponent = label ? <label className='input__label' htmlFor={name}>{label}</label> : ''

	return (
		<>
			<div className="input__container" key={name}>
				{labelComponent}
				<input
					className="input"
					id={id}
					name={name}
					value={value}
					type={type}
					placeholder={placeholder}
					data-empty={isEmpty}
					data-valid={isValid}
					required={isRequired}
					disabled={!isEnable}
					onChange={(e) => callback(e)}
				/>
				<p className="input__error">{error}</p>
			</div>
		</>
	);
};

export default Input;
