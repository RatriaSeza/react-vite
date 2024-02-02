/* eslint-disable react/prop-types */
export default function Button({ content, className, handler, isDisabled }) {
	return (
		<button onClick={handler} className={className} disabled={isDisabled ? true : false}>
			{content}
		</button>
	);
}