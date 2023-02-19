import React, { useState } from 'react';
import useItem from '../hooks/useItem';

function Item({ item }) {
	const [count, setCount] = useState(0);
	const { saveItems, deleteItems } = useItem();

	const handleIncrease = (item) => {
		setCount(count + 1);
		saveItems(item);
	};

	const handleDecrease = (item) => {
		setCount(Math.max(count - 1, 0));
		deleteItems(item);
	};

	return (
		<div className='mx-w-[200px] text-black'>
			<div className='h-[140px] md:h-[222px] flex flex-col justify-center gap-4 items-center mb-5 md:mb-10 shadow-lg border border-slate-50 md:shadow-2xl'>
				<img src={item.icon} alt='' className='w-16 h-16' />
				<p className='capitalize text-xl text-center font-light'>{item.name}</p>
			</div>
			<div className='flex items-center justify-center border border-gray-200 rounded-md'>
				<button
					className='px-3 py-2 bg-gray-200 text-2xl rounded-sm font-light'
					onClick={() => handleDecrease(item)}
				>
					-
				</button>
				<input
					type='text'
					value={count}
					readOnly={true}
					className='min-w-0 w-full text-xl text-center'
				/>
				<button
					className='px-3 py-2 bg-gray-200 text-2xl rounded-sm font-light'
					onClick={() => handleIncrease(item)}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Item;
