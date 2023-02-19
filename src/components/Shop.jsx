import React from 'react';
import Item from './Item';
import { items } from '../data';
import Hero from './Hero';
import Summary from './Summary';
import CalculateBtn from './CalculateBtn';
import ClearBtn from './ClearBtn';

function Shop() {
	return (
		<main className='max-w-[1258px] mx-auto flex flex-col items-center mt-32'>
			<Hero />
			<div className='px-3 mt-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 md:gay-y-7 gap-x-5 md:gap-12'>
				{items.map((item) => (
					<Item item={item} key={`${item.name}${item.icon}`} />
				))}
			</div>
			<div className='w-full flex justify-between items-center mt-16'>
				<ClearBtn />
				<CalculateBtn />
			</div>
			<Summary />
		</main>
	);
}

export default Shop;
