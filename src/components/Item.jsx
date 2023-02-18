import React, { useState } from 'react';

function Item({ item }) {
	const [count, setCount] = useState(0);

	const handleIncreaseCount = () => setCount(count + 1);
	const handleDecreaseCount = () => setCount(Math.max(count - 1, 0));

	return (
		<div className='w-[200px] text-black'>
			<div className='h-[222px] flex flex-col justify-center gap-4 items-center mb-10 shadow-xl'>
				<img src={item.icon} alt='' className='w-16 h-16' />
				<p className='capitalize text-xl text-center font-light'>{item.name}</p>
			</div>
			<div className='flex items-center justify-center border border-gray-200 rounded-md'>
				<button
					className='px-3 py-2 bg-gray-200 text-2xl rounded-sm font-light'
					onClick={handleDecreaseCount}
				>
					-
				</button>
				<input
					type='text'
					value={count}
					className='min-w-0 text-xl text-center'
				/>
				<button
					className='px-3 py-2 bg-gray-200 text-2xl rounded-sm font-light'
					onClick={handleIncreaseCount}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Item;
