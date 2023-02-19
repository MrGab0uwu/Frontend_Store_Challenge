import React from 'react';
import useItem from '../hooks/useItem';

function Summary() {
	const { total, size, subtotal, tax, totalPrice, duePrice } = useItem();

	return (
		<>
			<h2 className='text-4xl mb-20'>Summary</h2>
			<div className='bg-gray-100 w-11/12 md:w-[420px] h-[332px] p-5 md:p-10'>
				<ul className='w-full h-full flex flex-col justify-between [&>li]:flex [&>li]:justify-between [&>li]:items-center text-sm md:text-lg'>
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
