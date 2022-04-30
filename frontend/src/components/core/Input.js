import "./input.css";
export const Input = (props) => {
	return (
		<input
			type={props.type}
			onChange={props.onChange}
			value={props.value}
		></input>
	);
};
