import React from 'react';
import useItem from '../hooks/useItem';

// total items: array length
// total m2: m2 total of all items
// subtotal: 1m2 = 200
// tax: 16% of subtotal
// total: tax + subtotal
// due today: 50% of total

function Summary() {
	const { total, size, subtotal, tax, totalPrice, duePrice } = useItem();

	return (
		<>
			<h2 className='text-4xl mb-20'>Summary</h2>
			<div className='bg-gray-100 md:w-[420px] h-[332px] md:p-10'>
				<ul className='w-full h-full flex flex-col justify-between [&>li]:flex [&>li]:justify-between [&>li]:items-center'>
					<li>
						Total Items <span>{total}</span>
					</li>
					<li>
						Total M² <span>{size.toFixed(2)}</span>
					</li>
					<li>
						Subtotal <span>{subtotal.toFixed(2)}</span>
					</li>
					<li>
						Tax <span>{tax.toFixed(2)}</span>
					</li>
					<li className='font-bold'>
						Total <span>{totalPrice.toFixed(2)}</span>
					</li>
					<li className='font-bold'>
						Due Today 50% <span>{duePrice.toFixed(2)}</span>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Summary;
