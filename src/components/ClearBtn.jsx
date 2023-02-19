import React from 'react';
import useItems from '../hooks/useItem';

function ClearBtn() {
	const { clear } = useItems();

	return (
		<button
			type='button'
			className='btn border border-orange-500'
			onClick={clear}
		>
			Clear
		</button>
	);
}

export default ClearBtn;
