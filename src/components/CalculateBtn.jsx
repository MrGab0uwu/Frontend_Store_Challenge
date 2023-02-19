import React from 'react';
import useItems from '../hooks/useItem';

function CalculateBtn() {
	const { calculate } = useItems();

	return (
		<button type='button' className='btn bg-orange-500' onClick={calculate}>
			Calculate
		</button>
	);
}

export default CalculateBtn;
