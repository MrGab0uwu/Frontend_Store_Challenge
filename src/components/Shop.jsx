import React from 'react';
import Item from './Item';
import { items } from '../data';

function Shop() {
	return (
		<main className='max-w-[1258px] mx-auto flex flex-col items-center mt-32'>
			<div className=' text-center'>
				<h1 className='text-3xl lg:text-5xl mb-4'>What items to store?</h1>
				<p className='leading-8 text-gray-700 md:w-[60%] mx-auto'>
					Select which items you wish to store before moving to your new home.
					We’ll keep ’em safe!
				</p>
			</div>
			<div className='px-3 mt-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 md:gay-y-7 gap-x-5 md:gap-12'>
				{items.map((item) => (
					<Item item={item} key={`${item.name}${item.icon}`} />
				))}
			</div>
		</main>
	);
}

export default Shop;
