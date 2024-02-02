/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "./components/Header";

function App() {
	const [value, setValue] = useState(0);

	function plusCounter() {
		if (value == 9) {
			setValue("Done!");
		} else {
			setValue(value + 1);
		}
	}

	function minusCounter() {
		if (value == 0) {
			setValue("Done!");
		} else {
			setValue(value - 1);
		}
	}

	function resetCounter() {
		setValue(0);
	}

	return (
		<>
			<div className="counter">
				<Button handler={minusCounter} content="-" isDisabled={value == "Done!" ? true : false} />
				<p className="value">{value}</p>
				<Button handler={plusCounter} content="+" isDisabled={value == "Done!" ? true : false} />
			</div>
			<Button handler={resetCounter} content="Reset!" className="btn-reset" isDisabled={value == 0 ? true : false} />
		</>
	);
}

export default App;
