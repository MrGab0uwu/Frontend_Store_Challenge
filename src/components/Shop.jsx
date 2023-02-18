import React from 'react';
import Item from './Item';
import { items } from '../data';

function Shop() {
	return (
		<main className='flex flex-col items-center mt-32'>
			<div className=' text-center'>
				<h1 className='text-3xl lg:text-5xl mb-4'>What items to store?</h1>
				<p className='leading-8 text-gray-700 w-[60%] mx-auto'>
					Select which items you wish to store before moving to your new home.
					We’ll keep ’em safe!
				</p>
			</div>
			<div className='mt-28 grid grid-cols-2 md:grid-cols-5 gap-12'>
				{items.map((item) => (
					<Item item={item} key={`${item.name}${item.icon}`} />
				))}
			</div>
		</main>
	);
}

export default Shop;
