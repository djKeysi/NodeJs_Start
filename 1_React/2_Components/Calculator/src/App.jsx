import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let [inputValue, setInputValue] = useState('');

	const nums = ['0', '1', '2', '3', '4'];
	let h = '';

	//let inputValue = '';
	const onButtonNumberClick = (event) => {
		//h = event.target.innerText;
		//setInputValue(event.target.innerText);
		//console.log(inputValue);
		//inputValue = event.target.innerText;
	};

	return (
		<div>
			<input disabled={true} value={inputValue} />
			<ul>
				{nums.map((num, index) => (
					<button
						onClick={() => {
							onButtonNumberClick(event);
							inputValue += num;
							setInputValue(inputValue);

							console.log(inputValue);
						}}
						key={index}
					>
						{num}
					</button>
				))}
			</ul>
		</div>
	);
};
